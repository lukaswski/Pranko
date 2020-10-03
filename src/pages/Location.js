import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logoMain from '../img/logoMain.jpg';

const Location = () => (
  <Container>
    <Row>
      <Col>
        <h2>Pracujemy na terenie miasta:</h2>
      </Col>
    </Row>
    <Row>
      <Col />
      <img src={logoMain} alt="logo miasta Wągrowiec" />
      <Col />
    </Row>
      <span>
        Oraz miejscowości pobliskich do 30km!
      </span>
  </Container>
);

export default Location;
