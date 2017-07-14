import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';

class Baner extends Component {
  render() {
    return (
      <div className="main-page">
          <Header />
          <Content />
      </div>
    );
  }
}

export default Baner;
