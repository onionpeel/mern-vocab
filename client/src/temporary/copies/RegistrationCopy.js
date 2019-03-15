import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import {Form, Button, Container, Row, Col, Image} from 'react-bootstrap';
import {connect} from 'react-redux';
import {registerNewUser} from './../actions/registrationActions';
import Navbar from './CustomNavbar';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
  }

  onRegister = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }
    this.props.registerNewUser(newUser);
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderRedirect = () => {
    const tempUsername = this.props.registeredUsername.username;
    if (tempUsername.length > 0) {
      return <Redirect to='/dashboard' />
    }
  }

  render() {
    return (
      <div>
        <Navbar />
        <Container>
          {this.renderRedirect()}
          <Row>
            <Col xs={12} sm={4} className="sidebar-section">
                <Image src="assets/yukataCropped.jpg" />
                <p>Sign up and you might win a kimono.
                    Wooden sandals and special toe socks not included.</p>
            </Col>
            <Col>
              <Form onSubmit={this.onRegister}>
                <Form.Group controlId="formGroupName">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="name" name="name" onChange={this.onChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.onChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPasswordOne">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={this.onChange}/>
                </Form.Group>
                <Form.Group controlId="formGroupPasswordTwo">
                  <Form.Label>Re-enter password</Form.Label>
                  <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapPropsToComponent = state => {
  return {
    registeredUsername: state.registeredUsername
  }
};

const mapDispatchToProps = {
  registerNewUser
};

export default connect(mapPropsToComponent, mapDispatchToProps)(Registration);
