import React from 'react';
import './section1.css';
import logo_section1 from './img/section1/logo_section.png'
import mous_section1 from './img/section1/mous_section1.png'
const Section1 = () => {
  return (
    <section className="sec1">
      <div className="container">
          <img src={logo_section1} alt=""/>
          <h1>Experience the perfect combination of modern <br/>housing & natural scenery.</h1>
          <p>Located in Lofoten, norway </p>
          <img src={mous_section1} alt=""/>
      </div>
    </section>
  );
};

export default Section1;
