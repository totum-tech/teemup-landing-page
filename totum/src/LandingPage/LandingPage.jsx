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
          <img 
            className="landing-image1"
            src={require('./mapImage.jpg')}>
          </img>
        </div>
        <p className="landing-intro">
          We make it easy to get together with <br /> the people you care about most.
        </p>
        <p className="landing-intro1">
          STAY INFORMED
        </p>
        <EmailInput 
          className={"form-field email-field"} 
          placeholder={"email@address.com"}
        />
      </div>
    );
  }
}

export default LandingPage;
