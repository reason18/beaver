import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="holder">
        <div className="header">
          <div className="header-logo">Logo</div>
          <div className="header-contacts-flex">
            <span className="contacts-head">Есть вопросы? Связитесь с нами!</span>
            <span className="contacts-skype contacts-item">skype</span>
            <span className="contacts-phone contacts-item">099-000-00-00</span>
            <span className="contacts-email contacts-item">mail@mail.com</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
