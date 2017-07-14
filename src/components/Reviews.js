import React, { Component } from 'react';

class Reviews extends Component {
  render() {
    return (
      <div className="reviews-block">
        <div className="holder">
          <h2 className="h2_header">Отзывы наших клинтов</h2>
          <div className="reviews">
            <div className="reviews-item-flex">
              <div className="client-photo-wrap">
                <div className="client-photo"></div>
              </div>
              <div className="client-info">
                <p className="client-review">"lorem lorem lorem lorem lorem lorem lorem loremloremlorem loremloremloremlorem lorem lorem loremlorem lorem lorem lorem lorem lorem loremlorem"</p>
                <p className="client-name">Имя Клиента - <span className="client-position">Должность клинта</span></p>
                <a href="client-site" className="client-site">site.com</a>
              </div>
            </div>
            </div>
            <ul className="reviews-pagination">
              <li className="reviews-pagination-point"></li>
              <li className="reviews-pagination-point"></li>
              <li className="reviews-pagination-point"></li>
            </ul>
          </div>
        </div>
    );
  }
}

export default Reviews;
