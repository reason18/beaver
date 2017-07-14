import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <div className="holder">
        <div className="content">
          <h1 className="name h1_header">Название</h1>
          <h2 className="discription h2_header">Лозунг лозунг лозунг лозунг лозунг лозунг лозунг</h2>
          <div className="banner-buttons-block">
            <a href="" className="banner-button do-order-button">Обсудить проект</a>
            <a href="" className="banner-button view-projects-button">Смотреть портфолио</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
