import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import {getRandUser, confirm} from './Actions';

class AppControl extends Component {
  render() {
    const {
      count = 0,
      getRandUser,
      confirm,
      loading
    } = this.props;

    return (
      <footer className="app-footer">
        <a className={'no'} onClick={() => {
          getRandUser();
        }}>No</a>
        <a className={'yes'} onClick={() => {
          confirm();
          getRandUser();
        }}>Yes</a>
      </footer>
    );
  }
}

export default connect(
  ({count, loading}) => ({
    count,
    loading
  }),
  (dispatch) => ({
    getRandUser: () => dispatch(getRandUser()),
    confirm: () => dispatch(confirm())
  })
)(AppControl);
