import React from 'react';

const Section = ({ contentRenderer, headerTitle }) => {
  return (
    <div className="section">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '225px'}}>
        <div className="section-bar">&nbsp;</div>
        <h4 style={{fontSize: '20px', letterSpacing: '3px', padding: '0px 10px 0px 10px'}}> {headerTitle} </h4>
        <div className="section-bar">&nbsp;</div>
      </div>
      {contentRenderer ? contentRenderer() : null}
    </div>
  );
}

export default Section;
