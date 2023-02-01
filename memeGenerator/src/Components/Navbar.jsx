import React from 'react'
import troll from '../../public/TrollFace.svg'

export default function Navbar(){
    return(
        <nav>
            <div className='navTitle'>
                <img src= {troll} className="trollLogo" />
                <span>Meme Generator</span>
            </div>
            <div className='navDetails'>
                React Course - Project 3
            </div>
        </nav>
    )
}