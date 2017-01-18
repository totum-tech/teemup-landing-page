import React from 'react';

import './../App.css';

const EmailField = ({className, placeholder}) => {
  return (
    <div>
      <input 
        className={className}
        placeholder={placeholder}
        type="text" 
      />
      <button 
        className={"landing-button"}
      />
    </div>
  );
}

export default EmailField;
