import React from "react"

export default function Die(props){
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }
    return(
        <div 
            className = 'diceBox' 
            style = {styles} 
            onClick = {() => props.holdDice(props.id)}
        >
            {props.value}
        </div>
    )
}
