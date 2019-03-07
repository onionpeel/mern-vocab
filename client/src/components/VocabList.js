import React, {Component} from 'react';
import {Container, Row, Col, ListGroup, Button} from 'react-bootstrap';
import {getStudyList, deleteWord} from './../actions/vocabularyStudyListActions';
import {connect} from 'react-redux';


class VocabList extends Component {
  componentDidMount() {
    this.props.getStudyList();
  }

  onDeleteClick = _id => {
    const {vocabulary} = this.props.vocabularyStudyList;
    this.props.deleteWord(_id, vocabulary);
  }

  render() {
    const {vocabulary} = this.props.vocabularyStudyList;
    return (
        <Container fluid>
          <Row className="justify-content-center">
            <Col xs={12} sm={8}>
              <div>
                  <ListGroup>
                    {vocabulary.map(({word, reading, english, _id}, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col sm="2">{word}</Col>
                          <Col sm="3">{reading}</Col>
                          <Col sm="4">{english}</Col>
                          <Col>
                            <Button
                              className="remove-btn"
                              color="info"
                              size="sm"
                              onClick={this.onDeleteClick.bind(this, _id)}
                            >
                              &times;
                            </Button>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
    )
  }
}

const mapPropsToComponent = state => {
  return {
    vocabularyStudyList: state.vocabularyStudyList
  }
};

const mapDispatchToProps = {
  getStudyList,
  deleteWord
};

export default connect(mapPropsToComponent, mapDispatchToProps)(VocabList);
