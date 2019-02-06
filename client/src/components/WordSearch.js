import React, {Component} from 'react';
import {Container, Form, FormGroup, Label, Input, Button, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {connect} from 'react-redux';
import {getWordFromAPI, selectWord, setWordValue} from './../actions/vocabActions';

class WordSearch extends Component {
  onChange = e => {
    const word = e.target.value;
    setWordValue(word);
  }

  onGetWordClick = async e => {
    e.preventDefault();
    const {word} = this.props.vocab;
    await getWordFromAPI(word);
  }

  onShowSelectedWord = async id => {
    await selectWord(id);
  }

  render() {
    const {vocabList} = this.props.vocab;
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


const mapPropsToComponent = state => {
  return {
    vocab: state.vocab
  }
};

const mapDispatchToProps = {
  getWordFromAPI
};

export default connect(mapPropsToComponent, mapDispatchToProps)(WordSearch);
