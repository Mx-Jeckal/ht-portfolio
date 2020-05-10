import React, { Component } from 'react';
// import './style.css'
import { Link, animateScroll as scroll } from "react-scroll";
import { Navbar, Nav } from 'react-bootstrap'


class NavBtns extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Navbar sticky="top" collapseOnSelect expand="lg" bg="warning" variant="light" >
        <Navbar.Brand onClick={this.scrollToTop}><span role="img">✌</span>Good Vibes<span role="img">✌</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                href="#section1"
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>

            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
         </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#about">about</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}


export default NavBtns;
