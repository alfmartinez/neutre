import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

const App = ({message}) => (
  <div className="App">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>{message}</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </div>
);

const mapStateToProps = state => ({
  message: state.status
})

export default connect(mapStateToProps)(App);
