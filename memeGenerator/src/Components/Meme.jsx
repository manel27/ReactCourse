import React from 'react'
import memesData from "../assets/memesData"
 /**
     * Challenge: 
     * 1. Set up the text inputs to save to
     *    the `topText` and `bottomText` state variables.
     * 2. Replace the hard-coded text on the image with
     *    the text being saved to state.
     */


export default function Meme(){

    const [meme,setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeImages,setAllMemeImages] = React.useState(memesData)

    function getMemeImage(){
        const randIndex = Math.floor(Math.random()*allMemeImages.data.memes.length)
        //console.log(memesData.data.memes[randIndex].url)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeImages.data.memes[randIndex].url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        //console.log(event.target)
        setMeme(prevMeme =>{
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return(
        <main>
            <div className='form'>
                <input 
                    type = "text" 
                    placeholder = "Shut up" 
                    name = "topText" 
                    onChange={handleChange}
                />
                <input 
                    type = "text" 
                    placeholder = "and take my money" 
                    name = "bottomText" 
                    onChange={handleChange}
                />
                <button className = "submitButton" 
                    onClick = {getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className='imgContainer'>
                <img src = {meme.randomImage} className='memeImg'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}