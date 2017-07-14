import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="holder">
        <div className="header">
          <div className="header-logo">Beaver IT</div>
          <div className="header-contacts-flex">
            <span className="contacts-head">Есть вопросы? Связитесь с нами!</span>
            <span className="header-contacts-skype header-contacts-item">skype</span>
            <span className="header-contacts-phone header-contacts-item">099-000-00-00</span>
            <span className="header-contacts-email header-contacts-item">mail@mail.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
