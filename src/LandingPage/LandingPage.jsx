import React, { Component } from 'react';

import EmailInput from './EmailField';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-header">
          <h1>Totum</h1>
        </div>
        <div className="landing-image-wrapper">
          <img src={require('./mapImage.jpg')} />
        </div>
        <p className="landing-intro">
          The fastest way to get together <br /> with the people you care about.
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
