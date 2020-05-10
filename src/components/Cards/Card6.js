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
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloribus cum dicta voluptates ipsam veniam libero, sapiente facilis dolore voluptas aspernatur delectus eveniet harum dignissimos, consequuntur eligendi, ea quasi! Inventore!</p>
                    </div>
                </div>
            </div>
    )
}


export default Card6;