import React, { useState } from "react";
import "./Banner.css";
import Line from "../../assets/line.png";
import Image from "../../assets/black-beautiful-ladies.png";
import { Container, Row, Col } from "react-bootstrap";
import ShareForm from "../ShareForm/ShareForm";

const FirstBanner = () => {
  const [modal, setModal] = useState(
    "modal-one" | "modal-two" | "close"
  );

  const shareTestimony = () => {
    setModal("modal-one");
  };

  const showThankyou = () => {
    setModal("modal-two");
  };

  const handleClose = () => {
    setModal("close");
  };

  return (
    <div className="pt-5" style={{ backgroundColor: "#222" }}>
      <Container>
        <ShareForm
          showThankyou={showThankyou}
          handleClose={handleClose}
          modal={modal}
        />
        <Row className="banner">
          <Col sm="12" lg="6" md="6" className="image-div">
            <img src={Image} alt="banner" className="img-fluid" />
          </Col>
          <Col
            sm="12"
            lg="6"
            md="6"
            className="d-flex align-items-center text-white pb-5"
          >
            <div className="banner-texts">
              <h2>Tolu & Joy’s Experience</h2>
              <div className="client-badge">CUSTOMER</div>
              <p className="mt-4 text">
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round great
                experience. I would definately be coming back!
              </p>
              <button className="btn" type="button" onClick={shareTestimony}>
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

export default FirstBanner;
