import React from 'react';
import Slider from 'infinite-react-carousel';
import Card from '../Card/Card.js'

function SimpleSlider() {
    return (
        <Slider dots>
            <div>
                <h3>1</h3>
               <Card />
            </div>
            <div>
                <h3>2</h3>
                <Card />
            </div>
            <div>
                <h3>3</h3>
                <Card />
            </div>
            <div>
                <h3>4</h3>
                <Card />
            </div>
            <div>
                <h3>5</h3>
                <Card />
            </div>
        </Slider>
    );
}
export default SimpleSlider;