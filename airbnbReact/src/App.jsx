import React from "react"
import Navbar from "./Components/Navbar"
import Hero from "./components/Hero"
import Card from "./Components/Card"
import data from "./data"


/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    const cardComponents = data.map(
        card => 
        <Card 
        key = {card.id}
        item = {card}
        
        />
        )
        return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {cardComponents}
            </section>
        </div>
    )
}