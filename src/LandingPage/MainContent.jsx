import React from 'react';

const MainContent = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{backgroundColor: '#212121', height: 'auto', width: '200px', marginRight: '80px'}}>&nbsp;</div>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h4 style={{fontSize: '20px', letterSpacing: '3px', marginBottom: '20px'}}> GET CONNECTED </h4>
          <div className="section-bar">&nbsp;</div>
        </div>
        <span>
          Ever wish you could just work through a problem with someone?
        </span>
        <br />
        <span>
          Teemup shines when a friend is online to help.
        </span>
        <br />
        <div style={{ backgroundColor: 'rebeccapurple', color: 'white' }}>
          Try it now.
        </div>
      </div>
    </div>
  );
}

export default MainContent;
