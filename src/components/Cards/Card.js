import React from 'react';
import './style.css'
import app from '../../images/project1.jpg'


function Card(props){
    return(
            <div className="con">
                <div className="music-player">
                    <div className="cover">
                        <img src={app} alt={props.alt}></img>
                    </div>
                </div>
            </div>
    )
}


export default Card;