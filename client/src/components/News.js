import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import './News.css';

class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/fujiCropped.jpg" className="header-image" />
        <Container>
          <h2>News</h2>
          <br />
          <Row>
            <Col xs={12} sm={8}>
              <h5>Longing for Lanterns</h5>
              <p>Officials from several municipalities have been in Tokyo during recent weeks to discuss how they can implement a "No More Lightbulbs" strategy.</p>
              <p>The loss of urban flammability has been a sore point in recent years.  Combustability advocates are attempting to reignite a passion for the illuminations of yesteryear.</p>
              <p>They have just launched a Bright Lights, Burning City public relations campaign to expand the use of nighttime fire.</p>
              <br />
              <h5>BREAKING:  Full Scale Replica of Himeji Castle to be Built out of Natto</h5>
              <p>Stench is expected to cover three prefectures.  Details pending...</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/sumoCropped.jpg" />
              <p>"I must break you."</p>
              <p>"Go for it, fat boy."</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default News;
