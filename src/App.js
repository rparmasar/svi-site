import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container, Navbar, Button, Row, Col, Card, ButtonGroup, Image, Nav} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faHandshake, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'

import aboutusthumbnail from "./assets/bgvision.png"
import jumbobg from "./assets/bglandingpage.jpg";
import logo from "./assets/SVILogoUpdatedColours.svg";

function App() {
  return (
    <div className="App">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="svi-nav" sticky="top">
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
            </Nav>
            </Navbar.Collapse>
        </Navbar>
     <Jumbotron fluid id="svi-cover-jumbo">
        <Container>
          <div id="svi-cover-jumbo-text">
            <h1>We help our investors secure their financial futures through real estate.</h1>
            <br></br>
            <p>
              <Button variant="outline-light" size="lg">Learn more</Button>
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
        <Col md={4}>
          <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faHandshake} />Joint Venturing
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac molestie est. In venenatis congue metus venenatis placerat. Sed lacinia dictum finibus. Quisque eu ligula est. Vivamus ac orci sit amet metus hendrerit tempor. Vestibulum sed condimentum est, a auctor.</Card.Text>
            </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faHandHoldingUsd} />Private Lending
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac molestie est. In venenatis congue metus venenatis placerat. Sed lacinia dictum finibus. Quisque eu ligula est. Vivamus ac orci sit amet metus hendrerit tempor. Vestibulum sed condimentum est, a auctor.</Card.Text>
            </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faGraduationCap} />
                Mentorship
              </Card.Title>
              <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac molestie est. In venenatis congue metus venenatis placerat. Sed lacinia dictum finibus. Quisque eu ligula est. Vivamus ac orci sit amet metus hendrerit tempor. Vestibulum sed condimentum est, a auctor.</Card.Text>
            </Card.Body>
        </Col>
      </Row>
    </Container>
    <Jumbotron fluid id="svi-vision-jumbo">
        <Container>
          <div id="svi-vision-jumbo-text">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus est eu ligula dictum sollicitudin. Suspendisse ut ligula sed quam hendrerit rutrum eget cursus nibh. Sed vitae lectus non nisi convallis ullamcorper. Mauris suscipit arcu fringilla ex hendrerit, vel facilisis leo mattis. Nam ac erat sed purus fringilla aliquet accumsan a mi. In auctor, purus ac tincidunt consequat, enim turpis.</p>
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
          </div>
        </Col>
        <Col>
        {/* 100 Words */}
          <p id="svi-aboutus-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices arcu at velit ultrices suscipit sed suscipit ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec eu viverra turpis, sit amet auctor elit. Sed sit amet ante fermentum massa fermentum consectetur. Vivamus ultrices at elit at fringilla. Nulla in arcu massa. Quisque fermentum, lectus sed tristique lacinia, felis ipsum maximus arcu, id volutpat arcu ex quis justo. Fusce iaculis nisl lacus, efficitur egestas nunc vulputate at. Etiam nec commodo mi, in auctor erat. Fusce aliquet nulla tellus, nec molestie diam lacinia at. Aliquam luctus.</p>
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
        <Col md={4}>
          <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0 svi-testimonial">
                  <p>
                    {' '}
                    SV Investments got me ROI of 20% from a joint venturing project in April 2020. Their exceptional service made the entire process enjoyable even during the pandemic.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Rajeev
                  </footer>
                </blockquote>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0 svi-testimonial">
                  <p>
                    {' '}
                    SV Investments got me ROI of 20% from a joint venturing project in April 2020. Their exceptional service made the entire process enjoyable even during the pandemic.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Rajeev
                  </footer>
                </blockquote>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0 svi-testimonial">
                  <p>
                    {' '}
                    SV Investments got me ROI of 20% from a joint venturing project in April 2020. Their exceptional service made the entire process enjoyable even during the pandemic.{' '}
                  </p>
                  <footer className="blockquote-footer">
                    Rajeev
                  </footer>
                </blockquote>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Container fluid id="svi-footer">
      <Row>
        <Col>
          <div className="svi-section-header">
            <h1>Ready to be rich?</h1>
            <h2>Let's get in touch.</h2>
            <br></br>
            <Button variant="outline-light" size="lg">Learn more</Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Check us out on social media!</p>
          <ButtonGroup aria-label="Social Buttons">
            <Button variant="secondary"><FontAwesomeIcon icon={faGraduationCap}/></Button>
            <Button variant="secondary">Middle</Button>
            <Button variant="secondary">Right</Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default App;
