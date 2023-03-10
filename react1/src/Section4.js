import React from 'react';
import './section4.css';
import logo_sec4 from './img/section4/logo_sec4.png'
import bad_logo_section4 from './img/section4/bad_logo_section4.png'
import logo_phone_section4 from './img/section4/phone_logo_section4.png'
import logo_bathrooms_section4 from './img/section4/bathrooms_logo_section4.png'
const Section4 = () => {
  return (
    <section className='sec4'>
        <img className="logo_sec4" src={logo_sec4} alt=''/>
            <div className="container">
          <div className="sec4_content_bottom">
            <div className="box_sec4">
              <div className="sec4_box"></div>
            </div>
            <h1 className={'main_h1'}>Sleeping arrangements.</h1>
            <p className={'main_p'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br/>
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis <br/>
              consectetur.
            </p>
            <div className="sec4_cards">
              <div className="sec4_card">
                <img src={bad_logo_section4} alt=""/>
                <h3>Beds</h3>
                <p>The cabin is equipped with 12 beds, 4 of which <br/>
                  are in bunk. The rent includes linens for all beds.</p>
              </div>
              <div className="sec4_card">
                <img src={logo_phone_section4} alt=""/>
                <h3>Bedrooms</h3>
                <p>Spread out over two floors, the cabin offers 4 <br/>
                  bedrooms. Ranging from 2 to 4 beds per room.</p>
              </div>
              <div className="sec4_card">
              <img src={logo_bathrooms_section4} alt=""/>
              <h3>Bathrooms</h3>
              <p>The cabin has three bathrooms, all equipped <br/>
                with showers and one with a bath tub,</p>
            </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Section4;
