import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Navigation from './Navigation';
import About from './About';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="main-page">
            <Header />
            <Content />
          </div>
          <Navigation />
          <About />
        </div>
      </div>
    );
  }
}

export default App;
