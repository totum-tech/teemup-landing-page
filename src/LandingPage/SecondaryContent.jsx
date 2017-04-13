import React from 'react';

const SecondaryContent = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>
      <div style={{backgroundColor: '#212121', height: '250px', width: '400px', marginRight: '80px'}}>&nbsp;</div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
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
