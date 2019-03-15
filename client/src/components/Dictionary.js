import React, {Component} from 'react';
import {Container, Row, Col, Form, Button, Image, ListGroup} from 'react-bootstrap';
import {connect} from 'react-redux';
import {getWordFromAPI, selectWord, setWordValue} from './../actions/vocabActions';
import Navbar from './CustomNavbar';

class Dictionary extends Component {
  onChange = async e => {
    const word = e.target.value;
    await this.props.setWordValue(word);
  }

  onGetWordClick = e => {
    e.preventDefault();
    const {word} = this.props.vocab;
    this.props.getWordFromAPI(word);
  }

  onShowSelectedWord = id => {
    const {vocabList} = this.props.vocab;
    this.props.selectWord(id, vocabList);
  }

  render() {
    const {vocabList} = this.props.vocab;
    return (
      <div>
        <Navbar />
        <Container>
          <Row>
            <Col xs={12} sm={8}>
              <div>
                <Form className="mt-2" onSubmit={this.onGetWordClick}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Find that Japanese word you've always longed for</Form.Label>
                    <Form.Control type="text" placeholder="What's taking you so long?" onChange={this.onChange}/>
                    <Form.Text className="text-muted">
                      Life fulfillment is a click away.
                    </Form.Text>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Search
                  </Button>
                </Form>
              </div>
              <div>
                <ListGroup className="mt-3 mb-3">
                  {vocabList.map((vocab, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col xs="4" sm="4" md="3" lg="3">{vocab.japanese[0].word}</Col>
                        <Col>{vocab.japanese[0].reading}</Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src='assets/bookstoreCropped.jpg' className="img-fluid" rounded/>
              <p>I've lived here my whole life and still can't read this stuff.  I wish I had a convenient tool for looking up the meaning of these words.</p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapPropsToComponent = state => {
  return {
    vocab: state.vocab
  }
};

const mapDispatchToProps = {
  getWordFromAPI,
  selectWord,
  setWordValue
};

export default connect(mapPropsToComponent, mapDispatchToProps)(Dictionary);
