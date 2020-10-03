import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { StyledJumbotron, DesignerContainer } from './styled';
import { PHONE_NUMBER } from '../content/consts';
import { facebookIcon, githubIcon, mailIcon } from '../content/content';

const Footer = () => (
  <>
    <StyledJumbotron className="footer">
      <h4>Zadbaj o czystość w swoim domu lub samochodzie i umów się na darmową wycenę prac!</h4>
      <div>
        <Button className="mt-4" variant="outline-warning" size="lg" href={PHONE_NUMBER}>Zadzwoń lub napisz sms</Button>
      </div>
      <DesignerContainer>
        Projekt strony oraz wykonanie:
        {' '}
        <br />
        {' '}
        Łukasz Wiśniewski
        <Row className="justify-content-md-center mt-4">
          <Col lg={{ span: 0.5, offest: 1 }} xs>
            <a href="https://www.facebook.com/lukas.wski">{facebookIcon}</a>
            {' '}
          </Col>
          <Col lg={{ span: 0.5, offest: 2 }} xs>
            <a href="https://www.github.com/lukaswski">{githubIcon}</a>
            {' '}
          </Col>
          <Col lg={{ span: 0.5, offest: 3 }} xs>
            <a href="mailto:wski.lukas@gmail.com">{mailIcon}</a>
            {' '}
          </Col>
        </Row>
      </DesignerContainer>
    </StyledJumbotron>
  </>
);

export default Footer;
