import React from 'react';

const SecondaryContent = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{backgroundColor: '#212121', height: 'auto', width: '200px', marginRight: '80px'}}>&nbsp;</div>
      <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <h4 style={{fontSize: '20px', letterSpacing: '3px', marginBottom: '20px'}}>TALK IT OVER</h4>
          <div className="section-bar">&nbsp;</div>
        </div>
        <span>
          Teemup establishes a voice connection so that you can talk through your problems.
        </span>
        <br />
        <span>
          Don't expect to get any relationship advice though.
        </span>
        <br />
        <div style={{ backgroundColor: 'rebeccapurple', color: 'white' }}>
          Fine what else is there.
        </div>
      </div>
    </div>
  );
}

export default SecondaryContent;
