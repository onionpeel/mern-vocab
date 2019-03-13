import React, {Component} from 'react';
import {Modal, Button, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            New user?  Register for your ninja credentials<span> </span>

            <Link to="/registration">
              <Button variant="light" onClick={this.props.onHide}>here</Button>
            </Link>

          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Submit</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Login;
