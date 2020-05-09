import React from 'react';
import './style.css'


function Img(props){
    console.log(props)
    return(
        <i src={props} alt="" > </i>
    )
}


export default Img;