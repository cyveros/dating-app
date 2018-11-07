import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

class AppBody extends Component {
  render() {
    const {
      count = 0,
      user = null,
      loading = false
    } = this.props;

    return (
      <div className={'app-body'}>
        {user && <img src={user.picture.large}/>}
        {(loading || !user) ? <p>Loading ...</p> : <p>{user.name.first} {user.name.last}</p>} 
      </div>
    );
  }
}

export default connect(
  ({count, user, loading}) => ({
    count,
    user,
    loading
  })
)(AppBody);
