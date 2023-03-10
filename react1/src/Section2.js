import React from 'react';
import './section2.css';
const Section2 = () => {
  return (
    <section className='sec2'>
      <div className="container">
        <div className="box">
          <div className="sec2_box"></div>
        </div>
          <div className="sec2_content">
            <div className="sec2_content_left">
              <p>The Guest House is the perfect weekend get-away <br/>
                housing. Located in the Norwegian archipelago, <br/>
                Lofoten, it's a great escape from the hustle and <br/>
                bustle of the city. Lorem ipsum dolor sit amet, <br/>
                consectetur adipiscing elit. Nullam scelerisque <br/>
                aliquam odio et faucibus. Nulla rhoncus feugiat <br/>
                eros quis consectetur. Morbi neque ex, <br/>
                condimentum dapibus congue et, vulputate ut <br/>
                ligula.</p>
            </div>
            <div className="sec2_content_right">
            <p>Below you'll find information about the <br/>
              accommodation and what's included in the price. <br/>
              Don't hesitate to reach out to us vi the contact page <br/>
              if you have any questions around your stay.</p>
            <button>Book now</button>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Section2;
