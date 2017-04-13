import React, { Component } from 'react';
import MainContent from './MainContent';
import SecondaryContent from './SecondaryContent';
import TertiaryContent from './TertiaryContent';
import Section from './Section';

const secondaryContentRenderer = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px'}}>
          <div style={{backgroundColor: '#212121', height: '150px', width: '180px'}}>&nbsp;</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            <span>
              Tagline about project goes here.
            </span>
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px'}}>
          <div style={{backgroundColor: '#212121', height: '150px', width: '180px'}}>&nbsp;</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            <span>
              Tagline about project goes here.
            </span>
          </div>
        </div>

      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '300px'}}>
          <div style={{backgroundColor: '#212121', height: '150px', width: '180px'}}>&nbsp;</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            <span>
              Tagline about project goes here.
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}

const aboutUsContentRenderer = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <div style={{display: 'flex', alignItems: 'center', width: '300px'}}>
          <div style={{backgroundColor: '#212121', height: '180px', width: '180px', borderRadius: '50px'}}>&nbsp;</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            <span>
              Tagline about project goes here.
            </span>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', width: '300px'}}>
          <div style={{backgroundColor: '#212121', height: '180px', width: '180px', borderRadius: '50px'}}>&nbsp;</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            <span>
              Tagline about project goes here.
            </span>
          </div>
        </div>
      </div>
    </div>
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>

        <div style={{display: 'flex', alignItems: 'center', width: '300px'}}>
          <div style={{backgroundColor: '#212121', height: '180px', width: '180px', borderRadius: '50px'}}>&nbsp;</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            <span>
              Tagline about project goes here.
            </span>
          </div>
        </div>

        <div style={{display: 'flex', alignItems: 'center', width: '300px'}}>
          <div style={{backgroundColor: '#212121', height: '180px', width: '180px', borderRadius: '50px'}}>&nbsp;</div>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
            <span>
              Tagline about project goes here.
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

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

        <Section
          headerTitle={'ABOUT US'}
          contentRenderer={aboutUsContentRenderer}
        />
      </div>
    );
  }
}

export default LandingPage;
