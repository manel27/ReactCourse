import React from 'react'
import Die from './components/Die'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'


function randomDieValue(){
  return Math.ceil(Math.random()*6)
}

function App() {

  function allNewDice(){
    const dice = []
    for(let i=0; i<10; i++){
      const rand = randomDieValue()
      dice.push({
        id: nanoid(),
        value: rand,
        isHeld:false
      })
    }
    return dice
  }



  function handleRoll(){
    if(tenzies){ // win condition
      setTenzies(false)
      setDiceArray(allNewDice())
      console.log(bsfRoll)
      if((!isNaN(bsfRoll) && nRolls<Number(bsfRoll))){
        setBsfRoll(JSON.stringify(nRolls))
      }
      if(isNaN(bsfRoll)) {
        setBsfRoll(JSON.stringify(nRolls))
      }
      setNRolls(0)
    }
    else{
      setDiceArray(prevDiceArray => prevDiceArray.map(die => 
        die.isHeld ? die : {
          ...die,
          value: randomDieValue(),
        })
      )
      setNRolls(prevNRolls => prevNRolls + 1)
    }
  }

  function holdDice(id){
    setDiceArray(prevDiceArray => 
      prevDiceArray.map(
        die => die.id === id ? {...die,isHeld : !die.isHeld}: die
      )
    )
  }

  
  const [diceArray,setDiceArray] = React.useState(allNewDice())

  const [tenzies,setTenzies] = React.useState(false)

  const [nRolls,setNRolls] = React.useState(0)

  const [bsfRoll,setBsfRoll] = React.useState(
    () => localStorage.getItem("bsf") || "-"
  )
  
  React.useEffect(() => {
    const winValue = diceArray[0].value
    for(let i =0; i<diceArray.length; i++){
      const die = diceArray[i]
      if(die.isHeld === false || die.value !== winValue){
        return
      }
    }
    setTenzies(true)
  },[diceArray])

  React.useEffect(() => {
    localStorage.setItem("bsf",bsfRoll)
  }, [bsfRoll])

  const diceComponents = diceArray.map(
    die => 
      <Die 
        key = {die.id} 
        id = {die.id} 
        value = {die.value} 
        isHeld = {die.isHeld} 
        holdDice = {holdDice}
      />
  )

  return (
    <main className="App">
      {tenzies && <Confetti/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. 
        Click each die to freeze it at its current value between rolls.
      </p>
      <div className ='dieContainer'>
        {diceComponents}
      </div>
      <button onClick = {handleRoll}>{tenzies ? "New Game" : "Roll"}</button>
      <div className='bottomContainer'>
        <p className = "bestRollCounter">
          Best so far: {bsfRoll}
        </p>
        <p className = 'nRollCounter'>
          {nRolls === 1 ? `${nRolls} roll` : `${nRolls} rolls`}
        </p>
      </div>
    </main>
  )
}

export default App
