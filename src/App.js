import './App.css';
import {Jumbotron, Container, Navbar, Button} from 'react-bootstrap';

import jumbobg from "./assets/bglandingpage.jpg";
import logo from "./assets/SVILogoUpdatedColours.svg";

function App() {
  return (
    <div className="App">
     <Navbar id="svi-nav" sticky="top">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="SVI logo"
          />
        </Navbar.Brand>
     </Navbar>
     <Jumbotron>
        <Container>
          <h1>We help our investors secure their financial futures through real estate.</h1>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Container>
    </Jumbotron>
    </div>
  );
}

export default App;
