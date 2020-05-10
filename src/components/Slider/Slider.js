
import path from 'path'
import React from 'react';
import Slider from 'infinite-react-carousel';
import Card from '../Cards/Card.js';
import Card2 from '../Cards/Card2.js';
import Card3 from '../Cards/Card3.js';
import Card4 from '../Cards/Card4.js';
import Card5 from '../Cards/Card5.js';
import Card6 from '../Cards/Card6.js';

function SimpleSlider() {
    return (
        <Slider dots>
            <div>
                <h3>1</h3>
               <Card/>
            </div>
            <div>
                <h3>2</h3>
                <Card2 />
            </div>
            <div>
                <h3>3</h3>
                <Card3 />
            </div>
            <div>
                <h3>4</h3>
                <Card4 />
            </div>
            <div>
                <h3>5</h3>
                <Card5 />
            </div>
            <div>
                <h3>6</h3>
                <Card6 />
            </div>
        </Slider>
    );
}
export default SimpleSlider;