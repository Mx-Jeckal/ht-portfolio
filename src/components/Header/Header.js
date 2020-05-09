import React from 'react';
// import Collection from '../../pages/Collection/Collection.js'
import NavBtns from '../NavBtns/NavBtns.js'
// import Img from '../Img/Img.js'
import Slider from '../Slider/Slider.js'
import Footer from '../Footer/Footer.js'
import Container from 'react-bootstrap'
import './style.css'
// import slider from 'infinite-react-carousel/lib/carousel/slider';


function Header() {
    return (
        <div>
            <div className="Container">
            <NavBtns />
                <div className="Container">
                    <div id="title" className="slide header">
                    
                        <h1>Hazel Tuxhorn</h1>
                    </div>

                    <div id="slide1" className="slide">
                    <Slider />
                    </div>
                    {/* <Collection /> */}
                    
                    <div id="slide2" className="slide">
                        <div className="title">
                            <h1>Slide 2</h1>
                            <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
                        </div>
                        <img src="https://lorempixel.com/640/480/abstract/4/" alt="1234" />
                        <img src="https://lorempixel.com/640/480/abstract/4/" alt="1234" />
                    </div>

                    <div id="slide3" className="slide">
                        <div className="title">
                            <h1>Slide 3</h1>
                            <p>Lorem ipsum dolor sit amet, in velit iudico mandamus sit, persius dolorum in per, postulant mnesarchum cu nam. Malis movet ornatus id vim, feugait detracto est ea, eam eruditi conceptam in. Ne sit explicari interesset. Labores perpetua cum at. Id viris docendi denique vim.</p>
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