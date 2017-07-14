import React, { Component } from 'react';
class Contacts extends Component {
  render() {
    return (
      <div className="contacts-block">
        <div className="holder">
          <div className="contacts-flex">
            <div className="contacts-info">
              <h2 className="h2_header">Свяжитесь с нами</h2>
              <p className="contacts-discription">The set doesn't moved. Deep don't fruit fowl gathering heaven days moving cre eping under from i air. Set it fifth Meat was darkness. every bring in it.The set doesn't moved. Deep don't fruit fowl gathering heaven days moving creeping under from i air. Set it fifth Meat was darkness. every bring in it.</p>
              <p className="contacts-item contacts-addres"><span className="contacts-icon addres-icon"></span>07, Street 2, Almond Avenue,XYZ-0123</p>
              <p className="contacts-item contacts-phone"><span className="contacts-icon phone-icon"></span>(+12)1234567890</p>
              <p className="contacts-item contacts-email"><span className="contacts-icon email-icon"></span>email@domain.com</p>
            </div>
            <div className="contacts-form">
              <h2 className="h2_header">Отправте нам сообщение</h2>
              <form>
                <input type="text" className="form-input form-name" placeholder="Ваше имя"/>
                <input type="text" className="form-input form-email"placeholder="Ваше e-mail"/>
                <textarea className="form-message" cols="20" rows="5" placeholder="Сообщение"></textarea>
                <input type="submit" className="form-submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contacts;
