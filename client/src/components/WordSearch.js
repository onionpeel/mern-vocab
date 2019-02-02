import React, {Component} from 'react';
import axios from 'axios';
import {Container, Form, FormGroup, Label, Input, Button, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import uuidv4 from 'uuid/v4';

class WordSearch extends Component {
  constructor() {
    super();
    this.state = {
      word: '',
      vocabList: []
    };
  }

  onChange = e => {
    this.setState({
      word: e.target.value
    })
  }

  onGetWordClick = async e => {
    e.preventDefault();

    const word = this.state.word;
    const result = await axios.get(`/api/words/dictionary/${word}`);
    const term = result.data

    const newTerm = term.map(vocabObject => {
      const id = uuidv4();
      vocabObject.id = id;
      vocabObject.selected = false;
      return vocabObject;
    })

    this.setState({
      vocabList: newTerm
    })
  }

  onShowSelectedWord = async id => {
    const vocabulary = this.state.vocabList;
    const vocabArray = vocabulary.map(vocabObject => {
      if (vocabObject.id === id) {
        vocabObject.selected = "Added!";
      }
      return vocabObject;
    });
    this.setState({
      vocabList: vocabArray
    })

    const vocabularyWord = vocabulary.find(vocabObject => {
      return vocabObject.id === id;
    })

    const word = vocabularyWord.japanese[0].word;
    const reading = vocabularyWord.japanese[0].reading;
    const english = vocabularyWord.senses[0].english_definitions[0];

    try{
      await axios.post('/api/words/', {
        word,
        reading,
        english
      })
    } catch(e) {
      console.log(e)
    }
  }



  render() {
    const vocabulary = this.state.vocabList;
    return (
      <Container fluid>
        <Row>
          <Col sm={{size: 8, offset: 2}}>
            <div>
              <Form onSubmit={this.onGetWordClick}>
                <Row>
                  <Col sm="4">
                    <FormGroup>
                      <Label for="exampleText">Enter an English word</Label>
                      <Input type="text" name="text" id="exampleText" onChange={this.onChange}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Button >Submit</Button>
              </Form>

                <br />
                <ListGroup>
                  {vocabulary.map((vocab, index) => (
                    <ListGroupItem key={index}>
                      <Row>
                        <Col sm="2">{vocab.japanese[0].word}</Col>
                        <Col sm="3">{vocab.japanese[0].reading}</Col>
                        <Col sm="2">
                          <Button
                            color="info"
                            onClick={this.onShowSelectedWord.bind(this, vocab.id)}
                          >
                            Add to list
                          </Button>
                        </Col>
                        <Col sm="2">{this.state.vocabList[index].selected}</Col>
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
};

export default WordSearch;
