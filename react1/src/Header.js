import React from 'react';
import './header.css'
import headerlogo from './img/header/header_logo.png'
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_content">
          <img src={headerlogo} alt=""/>
          <ul className='header_ul'>
            <li>Start</li>
            <li>Contact</li>
            <li>Our history</li>
          </ul>
          <button>
            Book now
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
