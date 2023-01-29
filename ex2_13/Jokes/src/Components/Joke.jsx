import React from "react";

function Joke(prop){
    return(
        <div className = 'jokeContainer'>
            <p>{prop.upvotes}</p>           
            <p>{prop.downvotes}</p>
            <p>{prop.isPun}</p>
            {prop.setup && <h2>{prop.setup}</h2>}
            <h3>{prop.punchline}</h3>
        </div>
    )
}

export default Joke