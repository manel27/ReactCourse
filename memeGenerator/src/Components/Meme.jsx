import React from 'react'
import memesData from "../assets/memesData"

function randomImg(){
    const randIndex = Math.floor(Math.random()*memesData.data.memes.length)
    console.log(memesData.data.memes[randIndex].url)
}

export default function Meme(){
    return(
        <main>
            <div className='form'>
                <input type = "text" placeholder = "Shut up"/>
                <input type = "text" placeholder = "and take my money"/>
                <button className = "submitButton" 
                    onClick = {randomImg}
                >
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}