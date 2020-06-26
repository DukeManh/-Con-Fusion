import React, { Component } from 'react';
import Main from './components/Main';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/StoreConfigure';

const store = ConfigureStore();
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Main></Main>
          </div>
        </Router>
      </Provider>
    );
  }
}

