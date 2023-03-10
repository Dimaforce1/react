import React from 'react';
import './footer.css';
import social_network_logo_footer from './img/footer/social_network_logo_footer.png'
import logo_footer from './img/footer/logo_footer.png'
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_top">
          <div className="footer_left">
            <div className="ul_footer">
              <ul>
                <li>Pages</li>
                <li>Start</li>
                <li>Contact</li>
                <li>Our history</li>
                <li>Licenses</li>
                <li>Instructions</li>
                <li>Style guide</li>
              </ul>
            </div>
          </div>
          <div className="footer_main">
            <h3>Social Media</h3>
            <img src={social_network_logo_footer} alt=""/>
          </div>
          <div className="footer_right">
            <div className="footer_information">
              <h6>Newsletter</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius <br/>
                enim in eros elementum tristique.</p>
            </div>
            <div className="footer_search_field">
              <input className={'footer_input'} placeholder='Email' type="text"/>
              <button className={'footer_button'}>Submit</button>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <img src={logo_footer} alt=""/>
          <p>© Guest House, LLC. All rights reserved. Powered by Webflow. <br/>
            +47 (0) 702 88 12 34-example@webflow.io-Klubbvika 12, 8310 Kabelvag, Norway</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
