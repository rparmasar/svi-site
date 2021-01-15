import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Jumbotron, Container, Navbar, Button, Row, Col, Card, CardGroup} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faHandshake, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons'

import jumbobg from "./assets/bglandingpage.jpg";
import logo from "./assets/SVILogoUpdatedColours.svg";

function App() {
  return (
    <div className="App">
     <Navbar id="svi-nav" sticky="top">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="SVI logo"
          />
        </Navbar.Brand>
     </Navbar>
     <Jumbotron fluid>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac molestie est. In venenatis congue metus venenatis placerat. Sed lacinia dictum finibus. Quisque eu ligula est. Vivamus ac orci sit amet metus hendrerit tempor. Vestibulum sed condimentum est, a auctor.</p>
            
          </div>
        </Container>
    </Jumbotron>
    </div>
  );
}

export default App;
