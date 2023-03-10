import React from 'react';
import './section8.css';
const Section8 = () => {
  return (
    <section className={'sec8'}>
      <div className="container">
        <div className="box_sec8">
          <div className="sec8_box"></div>
        </div>
        <h1>We're already booked up for the <br/>
          spring — hurry up & secure your <br/>
          stay for the summer.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br/>
          scelerisque aliquam odio et faucibus.</p>
        <div className="sec8_buttons">
          <button className={'sec8_button1'}>Contact</button>
          <button className={'sec8_button2'}>Book now</button>
        </div>
      </div>
    </section>
  );
};

export default Section8;
