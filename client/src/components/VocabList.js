import React, {Component} from 'react';
import axios from 'axios';
import AppNavbar from './AppNavbar';
import {Container, Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap';


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

  onDeleteClick = async (id) => {
    try {
      await axios.delete(`api/words/${id}`);

      const newVocab = this.state.vocabulary.filter(item => {
        return item._id !== id;
      });
      await this.setState({
        vocabulary: newVocab
      })
    } catch(e) {
      console.log(e)
    }
  }

  render() {
    const vocabulary = this.state.vocabulary;
    return (
      <Container fluid>
        <AppNavbar />
        <br />
        <Row>
          <Col sm={{size: 5, offset: 2}}>
            <div>
                <ListGroup>
                  {vocabulary.map(({word, reading, english, _id}, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col sm="2">{word}</Col>
                        <Col sm="3">{reading}</Col>
                        <Col sm="4">{english}</Col>
                        <Col>
                          <Button
                            className="remove-btn"
                            color="danger"
                            size="sm"
                            onClick={this.onDeleteClick.bind(this, _id)}
                          >
                            &times;
                          </Button>
                        </Col>
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
