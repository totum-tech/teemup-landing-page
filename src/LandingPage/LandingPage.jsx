import React, { Component } from 'react';

import Section from './Section';

const mainContentRenderer = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>
      <div style={{backgroundColor: '#212121', height: '250px', width: '400px', marginRight: '80px'}}>&nbsp;</div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
        <span>
          Tagline about project goes here.
        </span>
        <span>
          Description about this feature here.
        </span>
        <br />
        <span>
          Description about this feature here.
        </span>
        <span>
          Secondary tagline about project goes here.
        </span>
      </div>
    </div>
  )
}

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
        <Section 
          headerTitle={'MAIN FEATURE'}
          contentRenderer={mainContentRenderer}
        />
        <Section 
          headerTitle={'SECONDARY FEATURES'}
          contentRenderer={secondaryContentRenderer}
        />
        <Section 
          headerTitle={'ABOUT US'}
          contentRenderer={() => {
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
          }}
        />
      </div>
    );
  }
}

export default LandingPage;
