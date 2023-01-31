import React from 'react'
import globe from "../../public/globe.svg"

export default function Navbar() {
    return(
        <nav>
            <img src = {globe}/>
            <span>my travel journal.</span>
        </nav>
    )
}