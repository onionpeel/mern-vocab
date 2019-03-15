import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, withRouter} from 'react-router-dom';

const SelectRoute = ({ component: Component, userLoggedIn, ...rest }) => (
  <Route {...rest} render={props => (
    userLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/registration',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const mapPropsToComponent = state => {
  return {
    registeredUsername: state.user.registeredUsername
  }
};

export default withRouter(connect(mapPropsToComponent)(SelectRoute));
