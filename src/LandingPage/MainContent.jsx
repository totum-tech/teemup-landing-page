import React from 'react';

const MainContent = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around', marginTop: '40px'}}>
      <div style={{backgroundColor: '#212121', height: '250px', width: '400px', marginRight: '80px'}}>&nbsp;</div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
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
