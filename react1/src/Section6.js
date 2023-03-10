import React from 'react';
import './section6.css';
import logo1_sec6 from './img/section6/logo1_sec6.png'
import logo2_sec6 from  './img/section6/logo2_sec6.png'
import logo3_sec6 from  './img/section6/logo3_sec6.png'
const Section6 = () => {
  return (
    <section className={'sec6'}>
      <div className="container">
        <div className="box">
          <div className="sec2_box"></div>
        </div>
        <h1 className={'logo_sec6_h1'}>Past guests.</h1>
        <p className={'logo_sec6_p'}>Don't take our word for it! Have a look at what our previous guests say <br/>
          about their stay at the Guest House.</p>
        <div className="sec6_cards">
          <div className="sec6_card">

              <img src={logo1_sec6} alt=""/>
              <h1>We had an amazing stay at the Guest House!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br/>
                varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br/>
                ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. <br/>
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. <br/>
                Nunc ut sem vitae risus tristique posuere.</p>
              <p>Nate Davidsson</p>

          </div>
          <div className="sec6_card">
            <img src={logo2_sec6} alt=""/>
            <h1>Beautiful little hideaway.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse <br/>
              varius enim in eros elementum tristique. Duis cursus, mi quis viverra <br/>
              ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. <br/>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
            <p className='sec6_p'>Laura Paulie</p>
          </div>
        </div>
        <div className="img_end">
          <img src={logo3_sec6} alt=""/>
          <img src={logo3_sec6} alt=""/>
        </div>
      </div>
    </section>
  );
};

export default Section6;
