import React from "react";
import './NavSecond.css'
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavSecond = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      bg="white"
      className="shadow-sm mainnav-con"
      variant="light"
    >
      <Container className="">
        <Nav className="mx-5 d-flex justify-content-between col">
          <Nav.Link href="#" className="nav-link-2">
            MARKETPLACE
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-2">
            WHOLESALE CENTER
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-2">
            SELLER CENTER
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-2">
            SERVICES
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-2">
            INTERSHIPS
          </Nav.Link>
          <Nav.Link href="#" className="nav-link-2">
            EVENTS
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavSecond;
