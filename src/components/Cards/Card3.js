import React from 'react';
import './style.css'
import app from '../../images/app1.jpg'


function Card3(props){
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


export default Card3;