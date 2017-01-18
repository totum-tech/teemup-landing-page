import React from 'react';

import './../App.css';

const EmailField = ({ placeholder }) => {
  return (
    <div className="email-field">
      <input
        className="form-field"
        placeholder={placeholder}
        type="text"
      />
      <button className="landing-button" />
    </div>
  );
}

export default EmailField;
