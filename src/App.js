import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Body from './Component/Body'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
