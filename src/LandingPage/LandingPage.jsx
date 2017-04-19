import React, { Component } from 'react';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import TertiaryContent from './TertiaryContent';
import Section from './Section';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
          <div className="landing-image-wrapper">
            <img alt="teemup" src={require('./teemup_lit.svg')} />
          </div>
          <p className="landing-intro">
            With the click of a button, we connect you with another aspiring <br /> developer so that you can work through classes together.
          </p>
          <button className="landing-button">
            DOWNLOAD
          </button>
          <p className="call-to-action">
            Learn More
          </p>
        <Section headerTitle={'GET CONNECTED'}>
          <MainContent />
        </Section>

        <Section headerTitle={'TALK IT OVER'}>
          <SecondaryContent />
        </Section>

        <Section headerTitle={'WORK IT OUT'}>
          <TertiaryContent />
        </Section>
      </div>
    );
  }
}

export default LandingPage;
