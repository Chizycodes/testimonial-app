import React from 'react';
import './TopNav.css';
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from '../../assets/Vasiti-Logo.png';

const TopNav = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="white"
      sticky="top"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto nav-items">
            <Nav.Link href="/" className="top-nav-link">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="#" className="top-nav-link">
              STORIES
            </Nav.Link>
            <Nav.Link href="#" className="top-nav-link">
              CONTACT
            </Nav.Link>
            <Nav.Link href="#" className="top-nav-link">
              LOG IN
            </Nav.Link>
            <Nav.Link href="#" className="signup-btn">
              <button>
                SIGN UP
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNav