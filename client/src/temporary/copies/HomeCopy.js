import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button} from 'react-bootstrap';
import Navbar from './CustomNavbar';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navbar />
          <Jumbotron className="jumbo-img">
            <h2>An Eclipse of the Rising Sun</h2>
            <br />
            <p>ハローキティが好き？</p>
            <p>いえ、口がない猫。。。本当？</p>
              <Link to="/about">
                <Button variant="primary">About</Button>
              </Link>
          </Jumbotron>
          <Row className="text-center">
            <Col xs={12} sm={4} className="pic-text">
              <Image src="assets/fushimiinariCropped.jpg" roundedCircle fluid className="pic-item"/>
              <h3>Fushimi Inari</h3>
              <p>"It's the one with the orange top and black base"</p>
            </Col>
            <Col xs={12} sm={4} className="pic-text">
              <Image src="assets/rockgardenCropped.jpg" roundedCircle fluid className="pic-item"/>
              <h3>Rock Garden</h3>
              <p>The person who lives in a house with paper windows should not throw stones</p>
            </Col>
            <Col xs={12} sm={4} className="pic-text">
              <Image src="assets/shrineCropped.jpg" roundedCircle fluid className="pic-item"/>
              <h3>Temple Entrance</h3>
              <p>"No, I clearly said fluorescent yellow.  Who the hell would ever paint this thing orange?"</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
};

export default Home;
