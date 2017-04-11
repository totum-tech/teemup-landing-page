import React, { Component } from 'react';

import Section from './Section';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
          <div className="landing-image-wrapper">
            <img alt="teemup" src={require('./heroImage.png')} />
          </div>
          <p className="landing-intro">
            With the click of a button, we connect you with another aspiring <br /> developer so that you can work through classes together.
          </p>
          <button className="landing-button">
            DOWNLOAD
          </button>
          <p>
            Learn More
          </p>
        <Section 
          headerTitle={'MAIN FEATURE'}
        />
        <Section 
          headerTitle={'SECONDARY FEATURES'}
        />
        <Section 
          headerTitle={'ABOUT US'}
        />
      </div>
    );
  }
}

export default LandingPage;
