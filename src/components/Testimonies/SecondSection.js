import React from 'react';
import { secondSection } from "../../data/testimonies";
import { Container, Row, Col } from "react-bootstrap";

const SecondSection = () => {
  return (
    <Container className="pt-5 pb-5 mt-3 mb-3">
      <Row>
        {secondSection.map((client) => {
          return (
            <Col sm="12" lg="4" md="4" className="mb-2" key={client.name}>
              <img src={client.image} alt="person" className="img-fluid" />
              <h4 className="name mt-3">{client.name}</h4>
              <span className="location mr-3">{client.location} </span>
              <span className={client.label === "VENDOR" ? "green-label" : "blue-label"}>
                {client.label}
              </span>
              <p className="testimony mt-3">{client.testimony}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default SecondSection