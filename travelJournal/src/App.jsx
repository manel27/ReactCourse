import React from 'react'
import Navbar from './Components/Navbar'
import data from "./assets/data"
import Card from "./Components/Card"



function App() {
  const cardComponents = data.map(
    card => // ver tamanho da data e só adicionar a todos excetuando o ultimo
    <Card key = {card.id} item = {card}/>
  )

  return (
    <div className="App">
      <Navbar/>
      {cardComponents}
    </div>
  )
}

export default App
