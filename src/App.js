import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

export default class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Main></Main>
        </div>
      </Router>
    );
  }
}

