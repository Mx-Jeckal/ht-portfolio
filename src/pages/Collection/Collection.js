import React from 'react';
import Card from '../../components/Card/Card.js'
import { Col, Row, Container } from 'react-bootstrap'


function Collection(){
    return(
        <div className="Container">
            <div className="Row">
                <div className="Col">
                    <Card />
                </div>
                <div className="Col">
                    <Card />
                </div>
                <div className="Col">
                    <Card />
                </div>
                <div className="Col">
                    <Card />    
                </div>
            </div>

        </div>
    )
}


export default Collection;