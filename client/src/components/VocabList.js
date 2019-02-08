import React, {Component} from 'react';
import AppNavbar from './AppNavbar';
import {Container, Row, Col, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {getStudyList, deleteWord} from './../actions/vocabularyStudyListActions';
import {connect} from 'react-redux';


class VocabList extends Component {
  componentDidMount() {
    const {vocabulary} = this.props.vocabularyStudyList;
    this.props.getStudyList();
  }

  onDeleteClick = _id => {
    const {vocabulary} = this.props.vocabularyStudyList;
    this.props.deleteWord(_id, vocabulary);
  }

  render() {
    const {vocabulary} = this.props.vocabularyStudyList;
    console.log('render method: ', vocabulary)
    return (
      <Container fluid>
        <AppNavbar />
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
