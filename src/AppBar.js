import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class AppBar extends Component {
  render() {
    const {
      count = 0
    } = this.props;

    return (
      <header className="app-header">
        <p>Gender Neutral Dating App</p>
        <p className={'counter'}>{count}</p>
      </header>
    );
  }
}

export default connect(
  ({count}) => ({
    count
  })
)(AppBar);
