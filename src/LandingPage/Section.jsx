import React from 'react';

const Section = ({ contentRenderer, headerTitle, children }) => {
  return (
    <div className="section">
      {contentRenderer ? contentRenderer() : null}
      {children}
    </div>
  );
}

export default Section;
