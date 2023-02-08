import React from 'react'
import memesData from "../assets/memesData"

    /**
     * Challenge: Save the random meme URL in state
     * - Create new state called `memeImage` with an
     *   empty string as default
     * - When the getMemeImage function is called, update
     *   the `memeImage` state to be the random chosen
     *   image URL
     * - Below the div.form, add an <img /> and set the
     *   src to the new `memeImage` state you created
     */



export default function Meme(){

    let [memeImage,randomImg] = React.useState("")

    function changeMeme(){
        const randIndex = Math.floor(Math.random()*memesData.data.memes.length)
        //console.log(memesData.data.memes[randIndex].url)
        randomImg(prevMeme => memesData.data.memes[randIndex].url)
    }

    return(
        <main>
            <div className='form'>
                <input type = "text" placeholder = "Shut up"/>
                <input type = "text" placeholder = "and take my money"/>
                <button className = "submitButton" 
                    onClick = {changeMeme}
                >
                    Get a new meme image
                </button>
            </div>
            <div className='imgContainer'>
                <img src = {memeImage} className='memeImg'/>
            </div>
        </main>
    )
}