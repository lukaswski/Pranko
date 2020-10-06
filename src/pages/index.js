import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {
  Navbar, Col, Nav, Button,
} from 'react-bootstrap';
import BrandName from './BrandName';
import { SofaCover, SectionContainer, StyledButton } from '../content/styled';
import ServicesCards from './ServicesCards';
import Prices from './Prices';
import Prepare from './Prepare';
import Location from './Location';
import Footer from './Footer';
import { topArrow } from '../content/content';
import { PHONE_NUMBER } from '../content/consts';

export default function Home() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
      <section id="home">
        <SofaCover>
          <Nav className="justify-content-left" activeKey="/home">
            <Navbar collapseOnSelect expand="md" variant="light">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link onClick={() => scrollTo('#servicesCards')}>Usługi</Nav.Link>
                  <Nav.Link onClick={() => scrollTo('#prices')}>Cennik</Nav.Link>
                  <Nav.Link onClick={() => scrollTo('#location')}>Lokalizacje</Nav.Link>
                  <Nav.Link onClick={() => scrollTo('#footer')}>Kontakt</Nav.Link>
                  <Button variant="outline-secondary" href={PHONE_NUMBER}>{PHONE_NUMBER.slice(7)}</Button>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Nav>
          <Col>
            <BrandName />
          </Col>
        </SofaCover>
      </section>
      <SectionContainer id="servicesCards">
        <ServicesCards />
      </SectionContainer>
      <Prepare version="photoCover" />
      <SectionContainer id="prices">
        <Prices />
      </SectionContainer>
      <section id="location">
        <Prepare />
        <Location />
      </section>
      <section id="footer">
        <Footer />
      </section>
      {offset > 300 && <StyledButton variant="primary" onClick={() => scrollTo('#home')}>{topArrow}</StyledButton>}
    </>
  );
}
