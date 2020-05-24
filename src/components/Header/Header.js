import React from 'react';
// import Collection from '../../pages/Collection/Collection.js'

// import Img from '../Img/Img.js'
import Slider from '../Slider/Slider.js'
import Footer from '../Footer/Footer.js'
import Container from 'react-bootstrap'
import ht1 from '../../images/ht1.jpg'
import ht2 from '../../images/ht2.jpg'
import './style.css'
import Section from '../Section/Section.js';
// import slider from 'infinite-react-carousel/lib/carousel/slider';


function Header({id}) {
    return (
        <div>
          
            <div className="Container">
                
                    <div className="Container">
                        <div
                            id="home"
                            >
                            <div id="title" className="slide header">

                                <h1 ><u>Hazel Tuxhorn</u></h1>
                            </div>
                        </div>
                        <div 
                        id="slide1" 
                        className="slide">
                            <Slider/>
                        </div>

                        <div id="slide2" className="slide">
                            <div className="title">
                                <h1>About Me</h1>
                                <p>
                                Full Stack Developer with a background in visual design and fine arts, able to bring not only technical functioning web apps but also visually appealing ones.Passionate about approaching programming challenges from different angles and collaborating with others to create meaningful web applications. Excited to develop responsive websites. Positioned well to provide unique perspectives on how end-users interact with websites and software platforms by leveraging my creative background to make interesting and engaging web applications.
                                </p>
                            </div>
                            <img id="image" src={ht1} alt="1234" />
                            <img id="image2" src={ht2} alt="1234" />
                        </div>

                        <div 
                        // id="slide3" 
                        className="slide">
                            <div className="title">
                            </div>
                        </div>

                        <div id="slide4" className="footer header">
                            <Footer />
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Header;