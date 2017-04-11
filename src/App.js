import React, { Component } from 'react';

import Footer from './Footer/Footer';
import LandingPage from './LandingPage/LandingPage';
import Navbar from './Navbar/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}

export default App;
