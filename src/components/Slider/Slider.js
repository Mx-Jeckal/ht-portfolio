
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
                <h2>Drinky Links</h2>
                <Card />
            </div>
            <div>
                <h2>Covid Check</h2>
                <Card2 />
            </div>
            <div>
                <h2>Burger Dreams</h2>
                <Card3 />
            </div>
            <div>
                <h2>Workout Recorder</h2>
                <Card4 />
            </div>
            <div>
                <h2>Expense Tracker</h2>
                <Card5 />
            </div>
            <div>
                <h2>Work Scheduler</h2>
                <Card6 />
            </div>
        </Slider>
    );
}
export default SimpleSlider;