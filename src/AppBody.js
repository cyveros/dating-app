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
        {user && !loading ? <div className={'avatar-container'}>
          <img className={'avatar'} src={user.picture.large}/>
          <p><span>{user.name.first}</span> <span>{user.name.last}</span></p>
          <p className={'age'}>{user.dob.age}</p>
        </div> : <p>Loading ...</p>} 
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
