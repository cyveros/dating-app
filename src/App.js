import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';
import AppBar from './AppBar';
import AppBody from './AppBody';
import AppControl from './AppControl';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar/>
        <AppBody/>
        <AppControl/>
      </div>
    );
  }
}

export default App;
