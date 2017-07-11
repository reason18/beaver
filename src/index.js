import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrolled + 'px')
}
let menu = document.getElementById('navigation');
let toFixNav = () => {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolled > 656) {
    menu.setAttribute('class','navigation-fixed');
    document.getElementsByClassName('main-page')[0].style.marginTop = "50px";
  } else {
      menu.setAttribute('class','navigation');
      document.getElementsByClassName('main-page')[0].style.marginTop = "0px";
  }
}

window.addEventListener('scroll', toFixNav )
