import React from 'react'

export default function Meme(){
    return(
        <main>
            <form>
                <input type = "text" placeholder = "Shut up"/>
                <input type = "text" placeholder = "and take my money"/>
                <button className = "submitButton">Get a new meme image</button>
            </form>
        </main>
    )
}