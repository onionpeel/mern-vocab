import React, {Component} from 'react';
import {Container, Col, Image} from 'react-bootstrap';
import './About.css';

class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/geishaCropped.jpg" className="header-image" />
        <Container>
          <Col xs={12} sm={7}>
            <Image src="assets/donutCropped.jpg" className="about-profile-pic img-fluid" rounded />
            <h3>Powdered Donut Sisters</h3>
            <p>An exotic appearance is only as far away as the supermarket cooking aisle.  Just look at us.  We have the skin of elderly lizards</p>
            <p>Don't mistake us for used Q-tips</p>
            <p>Beauty isn't skin deep.  It's as deep as an artificial sweetener.  The power of your inner pastry is waiting to be unleashed.</p>
          </Col>
        </Container>
      </div>
    )
  }
}

export default About;
