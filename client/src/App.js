import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Dictionary from './components/Dictionary';
import AddVocabulary from './components/AddVocabulary';
import VocabList from './components/VocabList';
import Registration from './components/Registration';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/news" component={News}/>
          <Route path="/dictionary" component={Dictionary}/>
          <Route path="/addvocabulary" component={AddVocabulary}/>
          <Route path="/vocablist" component={VocabList}/>
          <Route path="/registration" component={Registration} />
        </div>
      </Router>
    );
  }
}

export default App;
