import React from 'react'
   /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */


export default function Meme(){

    const [meme,setMeme] = React.useState(
        {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    )

    const [allMemeArray,setAllMemeArray] = React.useState()

    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeArray(data.data.memes))
    }, [])


    function getMemeImage(){
        console.log(allMemeArray)
        const randIndex = Math.floor(Math.random()*allMemeArray.length)
        //console.log(memesData.data.memes[randIndex].url)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: allMemeArray[randIndex].url
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