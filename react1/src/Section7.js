import React from 'react';
import './section7.css';
import top_bg_sec7 from './img/sec7/top_bg_sec7.png';
import wi_fi_logo_sec7 from './img/sec7/wi-fi_logo_sec7.png';
import logo2_sec7 from './img/sec7/logo2_sec7.png';
import bread_logo_sec7 from './img/sec7/bread_logo_sec7.png';
import table_items_logo_sec7 from './img/sec7/table_items_logo_sec7.png';
const Section7 = () => {
  return (
    <section>
      <div className="container">
        <div className="sec7_top">
          <img src={top_bg_sec7} alt=""/>
        </div>
        <div className="sec7_bottom">
          <div className="sec7_left">
            <div className="box_sec7">
              <div className="sec7_box"></div>
            </div>
            <h1>Come together.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br/>
              scelerisque aliquam odio et faucibus.
            </p>
          </div>
          <div className="sec7_right">
            <div className="sec7_cards">
              <div className="sec7_cards_left">
                <div className="card_top">
                  <img src={wi_fi_logo_sec7} alt=""/>
                  <p>Lorem ipsum dolor sit amet, <br/>
                    consectetur adipiscing elit.</p>
                </div>
                <div className="card">
                  <img src={logo2_sec7} alt=""/>
                  <p>Nulla rhoncus feugiat eros <br/>
                    quis consectetur.</p>
                </div>
              </div>
              <div className="sec7_cards_right">
                <div className="card_top">
                  <img src={bread_logo_sec7} alt=""/>
                  <p>Nullam scelerisque aliquam <br/>
                    odio et faucibus.</p>
                </div>
                <div className="card">
                  <img src={table_items_logo_sec7} alt=""/>
                  <p>Morbi neque ex, <br/>
                    condimentum.
                  </p>
                </div>
              </div>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
