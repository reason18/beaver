import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="holder">
          <h2 className="about-header">О нас</h2>
          <div className="about-us-block">
            <p className="about-us-paragraph">Добрый день</p>
            <p className="about-us-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="about-us-paragraph"></p>
            <p className="about-us-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p className="about-us-paragraph"></p>
            <p className="about-us-paragraph">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="about-us-block employes-flex">
            <div className="employes-block">
              <div className="employes-photo"></div>
              <p className="employes-name" >Lorem Lorem</p>
              <p className="employes-position">ipsum ipsum ipsum ipsum</p>
            </div>
            <div className="employes-block">
              <div className="employes-photo"></div>
              <p className="employes-name">Lorem Lorem</p>
              <p className="employes-position">ipsum ipsum ipsum ipsum</p>
            </div>
            <div className="employes-block">
              <div className="employes-photo"></div>
              <p className="employes-name">Lorem Lorem</p>
              <p className="employes-position">ipsum ipsum ipsum ipsum</p>
            </div>
            <div className="employes-block">
              <div className="employes-photo"></div>
              <p className="employes-name">Lorem Lorem</p>
              <p className="employes-position">ipsum ipsum ipsum ipsum</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
