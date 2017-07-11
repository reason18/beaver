import React, { Component } from 'react';
class Navigation extends Component {
  render() {
    return (
      <div className=" navigation">
        <div className="holder navigation-flex">
          <div className="navigation-logo">Logo</div>
          <nav>
            <ul className="navigation-block">
              <li className="navigation-item"><a href="#">Главная</a></li>
              <li className="navigation-item"><a href="#">О нас</a></li>
              <li className="navigation-item"><a href="#">Наши услуги</a></li>
              <li className="navigation-item"><a href="#">Портфолио</a></li>
              <li className="navigation-item"><a href="#">Заказать сайт</a></li>
              <li className="navigation-item"><a href="#">Блог</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
