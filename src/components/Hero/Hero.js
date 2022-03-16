import React from "react";
import "./Hero.css"
import { Container, Row, Col } from "react-bootstrap";
import HeroImage from "../../assets/Testimonial-image-1.png";

const Hero = () => {
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <Col sm="12" lg="6" md="6" className="d-flex align-items-center">
            <div className="hero-texts">
              <h1>
                Amazing Experiences from Our Wonderful Customers
              </h1>
              <p>
                Here is what customers and vendors are saying about us, you can
                share your stories with us too.
              </p>
            </div>
          </Col>
          <Col sm="12" lg="6" md="6">
            <img src={HeroImage} alt="banner" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
