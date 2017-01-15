import React, { Component } from 'react';

import EmailInput from './Input';

class LandingPage extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EmailInput />
      </div>
    );
  }
}

export default LandingPage;
