import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Sprint Naming App</h2>
        </div>
        <p className="App-intro">
          This is a useful tool to help make it easier to name your sprint cycles using food, pop culture, and just about anything else!
        </p>
      </div>
    );
  }
}

export default App;
