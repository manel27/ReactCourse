import React from 'react'
import localLogo from "../../public/locationLogo.svg"

export default function Card(props){
    return(
        <div className="cardContainer">
            <div className = "imgContainer" >
                <img className = "cardImg" src = {props.item.imageUrl} />
            </div>
            <div className="cardDetails">
                <div className = "cardLocation">
                    <img src = {localLogo} className = "localLogo"/>
                    <span className = "cardCountry"> {props.item.location.toUpperCase()} </span>
                    <a className = "googleMapsLink" url = {props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h3 className='cardDate'>{props.item.startDate} - {props.item.endDate}</h3>
                <div className='cardDescription'>
                {props.item.description}  
                </div>
            </div>

        </div>

    )
}