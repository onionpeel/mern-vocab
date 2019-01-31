import React, {Component} from 'react';
import axios from 'axios';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';


class VocabList extends Component {
  constructor() {
    super();
    this.state = {
      vocabulary: []
    }
  }

  componentDidMount() {
    axios.get('/api/words/')
      .then(res => {
        this.setState({
          vocabulary: res.data
        })
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const vocabulary = this.state.vocabulary;
    return (
      <Container fluid>
        <Row>
          <Col sm={{size: 8, offset: 2}}>
            <div>
                <ListGroup>
                  {vocabulary.map((vocab, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col sm="2">{vocab.word}</Col>
                        <Col sm="3">{vocab.reading}</Col>
                        <Col sm="2">{vocab.english}</Col>
                      </Row>
                    </ListGroupItem>
                  ))}
                </ListGroup>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default VocabList;
