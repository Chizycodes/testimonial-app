import React from "react";
import "./Banner.css";
import Line from "../../assets/line.png";
import Image from "../../assets/woman-shoppingbag-card.png";
import { Container, Row, Col } from "react-bootstrap";

const SecondBanner = () => {
  return (
    <div className="pt-5" style={{ backgroundColor: "#FFF8F5" }}>
      <Container>
        <Row className="banner">
          <Col sm="12" lg="6" md="6" className="image-div">
            <img src={Image} alt="Image" className="img-fluid" />
          </Col>
          <Col
            sm="12"
            lg="6"
            md="6"
            className="d-flex align-items-center text-white pb-5"
          >
            <div className="banner-texts">
              <h2 style={{ color: "#242120" }}>Josiah's Experience</h2>
              <div
                className="client-badge"
                style={{
                  border: "1px solid #FF5C00",
                  borderRadius: "4px",
                  color: "#FF5C00",
                }}
              >
                VENDOR
              </div>
              <p className="mt-4 text" style={{ color: "#242120" }}>
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </p>
              <button
                className="btn jo-btn"
                type="button"
                style={{ color: "#FF5C00" }}
              >
                SHARE YOUR OWN STORY!
                <img src={Line} alt="Line" className="img-fluid" />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SecondBanner;
