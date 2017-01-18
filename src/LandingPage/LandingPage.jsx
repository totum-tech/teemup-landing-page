import React, { Component } from 'react';

import EmailInput from './EmailField';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-header">
          <h1>Totum</h1>
        </div>
        <div className="landing-image">
          <img src={require('./mapImage.jpg')} />
        </div>
        <p className="landing-intro">
          We make it easy to get together with <br /> the people you care about most.
        </p>
        <p>
          STAY INFORMED
        </p>
        <EmailInput placeholder="email@address.com" />
      </div>
    );
  }
}

export default LandingPage;
