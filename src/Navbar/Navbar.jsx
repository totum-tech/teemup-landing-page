import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <img alt="teemup" src={require('./logo.png')} />
      </div>
    );
  }
}

export default Navbar;
