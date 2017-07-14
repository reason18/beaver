import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Navigation from './Navigation';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contacts from './Contacts';
import Reviews from './Reviews';
import Blog from './Blog';
import Footer from './Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
          <Banner />
          <Navigation />
          <About />
          <Services />
          <Portfolio />
          <Contacts />
          <Reviews />
          <Blog />
          <Footer />
          </div>
        );
      }
    }

    export default App;
