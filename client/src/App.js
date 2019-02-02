import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './components/Main';
import VocabList from './components/VocabList';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/vocabulary" exact component={Main} />
          <Route path="/" exact component={VocabList} />
        </div>
      </Router>
    );
  }
}

export default App;
