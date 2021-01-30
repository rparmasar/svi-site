import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container, Navbar, Button, Row, Col, Card, ButtonGroup, Image, Nav, Carousel} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHandshake, faHandHoldingUsd, faCity } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";


import aboutusthumbnail from "./assets/MitchParmasarProfilePic-RBfeb1420v1.png"
import logo from "./assets/SVILogoUpdatedColours.svg";

function App() {
  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" variant="dark" className="svi-nav" sticky="top">
            <Navbar.Brand href="#svi-cover-jumbo">
              <img
                src={logo}
                width="70"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="w-100 nav-justified">
              <Nav.Link href="#svi-services-container">Our Services</Nav.Link>
              <Nav.Link href="#svi-vision-jumbo">Our Vision</Nav.Link>
              <Nav.Link href="#svi-aboutus">About Us</Nav.Link>
              <Nav.Link href="#svi-testimonials-container">Our Customers</Nav.Link>
              <Button id="svi-nav-btn"variant="outline-light" size="sm" href="https://calendly.com/sv-investment/discovery-call" target="_blank">Get Started</Button>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
     <Jumbotron fluid id="svi-cover-jumbo">
        <Container>
          <div id="svi-cover-jumbo-text">
            <h1>We help our investors secure their financial futures through real estate.</h1>
            <br></br>
            <p>
              <Button variant="outline-light" size="lg" href="https://calendly.com/sv-investment/discovery-call" target="_blank">Get Started</Button>
            </p>
          </div>
        </Container>
    </Jumbotron>
    <Container fluid id="svi-services-container">
      <Row>
        <Col>
          <div className="svi-section-header">
            <h1>Our Services</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faHandshake} />Joint Venturing
              </Card.Title>
              <Card.Text>You provide the funding and we manage it all and share the profits. </Card.Text>
            </Card.Body>
        </Col>
        <Col md={6}>
          <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faCity} />
                Commerical Buildings
              </Card.Title>
              <Card.Text>Join the exciting market of Commerical-Residential Real Estate investing.</Card.Text>
            </Card.Body>
        </Col>
        <Col md={6}>
          <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faGraduationCap} />
                Mentorship
              </Card.Title>
              <Card.Text>Our Hold Your Hand program helps you every step of the way in owning your first property while teaching you it all!</Card.Text>
            </Card.Body>
        </Col>
        <Col md={6}>
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faHandHoldingUsd} />Private Lending
              </Card.Title>
              <Card.Text>Passive investing with great returns – sit back and watch your money grow! </Card.Text>
            </Card.Body>
        </Col>
      </Row>
    </Container>
    <Jumbotron fluid id="svi-vision-jumbo">
        <Container>
          <div id="svi-vision-jumbo-text">
            <h1>Our Vision</h1>
            <p id="svi-vision-text">Our vision is to build a strong network on the foundation of trust and fairness ensuring everyone that invests with us has an opportunity to earn and grow with full confidence. Our investors comes first and we work diligently to ensure your satisfaction so we can grow together over the long term.</p>
          </div>
        </Container>
    </Jumbotron>
    <Container fluid id="svi-aboutus">
      <Row>
        <Col>
          <div className="svi-section-header">
            <h1>About Us</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <div id="svi-aboutus-thumbnail">
            <Image src={aboutusthumbnail} thumbnail />
            <p>Mitch Parmasar: Real Estate Investor</p>
          </div>
        </Col>
        <Col>
        {/* 100 Words */}
          <p className="svi-aboutus-text">ShanVish Investments was created to build a secure future that relies on hard work and perseverance in securing our financial freedom together allowing our investors to help them achieve their financial and lifestyle goals.
          </p>
          <p className="svi-aboutus-text">
          We believe we live in one of the best countries in the world that has the amazing ability to reward everyone that wants a better financial future to achieve it. We have to take the bold step to invest and real estate is our area of expertise and we have the team to win!
          </p>
          <p className="svi-aboutus-text">
          Our company is built on the foundation of shared success, the successful you are the more successful we are.
          </p>
        </Col>
      </Row>
    </Container>
    <Container fluid id="svi-testimonials-container">
      <Row>
        <Col>
          <div className="svi-section-header">
            <h1>Our Customers</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Carousel id="svi-testimonials-carousel">
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="svi-testimonials-slide-text">
                      {' '}
                      I’ve been investing with Mitch and Gai for many years now and we’ve had some amazing deals and profits and I look forward to continuing to work with them. I am not only a realtor but I JV with my own money working with Mitch and Gai as they are a great people to work with.{' '}
                    </p>
                    <footer className="blockquote-footer">
                      Junaid Abbasi
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="svi-testimonials-slide-text">
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget neque vulputate, mattis lectus at, euismod sem. Aliquam molestie sem eu vehicula ornare. Etiam eu ex ex. Aliquam varius, tellus rutrum sagittis sodales, mauris dolor rhoncus nisi, ut tincidunt ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Carousel.Item>
            <Carousel.Item>
              <Card>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p className="svi-testimonials-slide-text">
                      {' '}
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget neque vulputate, mattis lectus at, euismod sem. Aliquam molestie sem eu vehicula ornare. Etiam eu ex ex. Aliquam varius, tellus rutrum sagittis sodales, mauris dolor rhoncus nisi, ut tincidunt ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                      Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    <Container fluid id="svi-footer">
      <Row>
        <Col>
          <div id="svi-footer-tagline-text">
            <h1>Ready to be rich?</h1>
            <h4>Let's get in touch.</h4>
          </div>
          <Button variant="outline-light" size="lg" href="https://calendly.com/sv-investment/discovery-call" target="_blank">Get Started</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <div id="svi-footer-socialmedia-text">
            <h4>
              Check us out on social media!
            </h4>
          </div>
          <div id="svi-footer-socialmedia-links">
            <ButtonGroup aria-label="Basic example">
              <Button id="svi-fb-btn" variant="secondary" size="lg">
                <FontAwesomeIcon icon={faFacebook} />
              </Button>
              <Button id="svi-ig-btn" variant="secondary" size="lg">
                <FontAwesomeIcon icon={faInstagram} />
              </Button>
              <Button id="svi-yt-btn" variant="secondary" size="lg">
                <FontAwesomeIcon icon={faYoutube} />
              </Button>
            </ButtonGroup>
        </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
