import React from 'react'
import Navbar from './Components/Navbar'
import data from "./assets/data"
import Card from "./Components/Card"



function CardRender(card, size){
  if (card.id != size) {
    return(// ver tamanho da data e só adicionar a todos excetuando o ultimo
      <div className = "fullCardContainer">
        <Card key = {card.id} item = {card}/> 
        <div className = "breakLine">
        </div>
      </div>
  )}
    else {
      return(<Card key = {card.id} item = {card}/>)
    }
}

function App() {
  const cardComponents = data.map(
    card => CardRender(card, Object.keys(data).length)
  )
  return (
    <div className="App">
      <Navbar/>
      {cardComponents}
    </div>
  )
}

export default App
