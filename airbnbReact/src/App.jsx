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
            // <Hero />
    const cardComponents = data.map(
        card => 
            <Card 
                img = {card.coverImg}
                rating = {card.stats.rating}
                reviewCount = {card.stats.reviewCount}
                country = {card.location}
                title = {card.title}
                price = {card.price}
            />
        )
    return (
        <div>
            <Navbar />
            {cardComponents}
        </div>
    )
}