import React from 'react';
import {
  Card, Col, CardDeck,
} from 'react-bootstrap';
import { StyledCard, StyledImg, StyledJumbotron } from './styled';
import { services, extractionWashText } from '../content/content';

const { title, content, howItWork } = extractionWashText;

const ServicesCards = () => (
  <>
    <h2>Usługi:</h2>
    <StyledJumbotron fluid className="blanc">
      <p>
        <b>{title}</b>
        {' '}
        {content}
      </p>
      <p>{howItWork}</p>
    </StyledJumbotron>
    <CardDeck>
      {services.map(({ name, img }) => (
        <Col lg={3} md={6} sm={6} xs={10} id={name} key={name}>
          <StyledCard>
            <StyledImg variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
            </Card.Body>
          </StyledCard>
        </Col>
      ))}
    </CardDeck>
  </>
);

export default ServicesCards;
