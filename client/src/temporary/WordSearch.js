import React, {Component} from 'react';
import {Container, Form, FormGroup, Label, Input, Button, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {connect} from 'react-redux';
import {getWordFromAPI, selectWord, setWordValue} from './../actions/vocabActions';


class WordSearch extends Component {
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
      <Container fluid>
        <Row className="mb-4">
          <Col xs="8" sm="6" md="4" lg="4">
            <div>
              <Form onSubmit={this.onGetWordClick}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="exampleText">Enter an English word</Label>
                      <Input type="text" name="text" id="exampleText" onChange={this.onChange}/>
                    </FormGroup>
                  </Col>
                </Row>
                <Button >Submit</Button>
              </Form>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs="12" sm="12" md="8" lg="8">
            <div>
              <ListGroup>
                {vocabList.map((vocab, index) => (
                  <ListGroupItem key={index} style={{backgroundColor: "#F0E6F5"}}>
                    <Row>
                      <Col xs="4" sm="4" md="3" lg="3">{vocab.japanese[0].word}</Col>
                      <Col xs="4" sm="4" md="3" lg="3">{vocab.japanese[0].reading}</Col>
                      <Col xs="4" sm="4" md="3" lg="2">
                        <Button
                          color="info"
                          onClick={this.onShowSelectedWord.bind(this, vocab.id)}
                        >
                          Add to list
                        </Button>
                      </Col>
                      <Col sm="1">{vocabList[index].selected}</Col>
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
  getWordFromAPI,
  selectWord,
  setWordValue
};

export default connect(mapPropsToComponent, mapDispatchToProps)(WordSearch);
