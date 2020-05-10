import React from 'react';
import './style.css'
import app from '../../images/app4.JPG'


function Card6(props){
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


export default Card6;