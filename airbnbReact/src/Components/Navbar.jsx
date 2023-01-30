import React from "react"
import airbnb from "../../public/images/airbnb-logo.png"

export default function Navbar() {
    return (
        <nav>
            <img src={airbnb} className="nav--logo" />
        </nav>
    )
}