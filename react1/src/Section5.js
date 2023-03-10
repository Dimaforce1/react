import React from 'react';
import './section5.css';
import modern_kitchen_logo_section5 from './img/section5/modern_kichen_logo_section5.png'
import Outdoor_Paths_logo_section5 from './img/section5/Outdoor_Paths_logo_section5.png'
import Coffee_Maker_logo_section5 from './img/section5/Coffee_Maker_logo_section5.png'
import Natural_Scenery_logo_section5 from './img/section5/Natural_Scenery_logo_section5.png'
import Air_Conditioner_logo_section5 from './img/section5/Air_Conditioner_logo_section5.png'
import Storage_Solutions_logo_section5 from './img/section5/Storage_Solutions_logo_section5.png'
import Cutlery_Selection_logo_section5 from './img/section5/Cutlery_Selection_logo_section5.png'
import Take_away_Options_logo_section5 from './img/section5/Take-away_Options_logo_section5.png'
const Section5 = () => {
  return (
    <section className={'sec5'}>
      <div className="container">
        <div className="sec5_content">
          <div className="box_sec5">
            <div className="sec5_box"></div>
          </div>
          <h1>
            The perfect escape.
          </h1>
          <p className={'sec5_p_information'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam <br/>
            scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis <br/>
            consectetur.
          </p>
          <div className="sec5_cards">
            <div className="sec5_card_left">
             <div className="sec5_card">
               <img src={modern_kitchen_logo_section5} alt=""/>
               <p>Modern Kitchen Appliances <br/>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
               </p>
             </div>
              <div className="sec5_card">
                <img src={Outdoor_Paths_logo_section5} alt=""/>
                <p>Outdoor Paths <br/>
                  Nulla rhoncus feugiat eros quis consectetur.
                </p>
              </div>
              <div className="sec5_card">
                <img src={Coffee_Maker_logo_section5} alt=""/>
                <p>Coffee Maker <br/>
                  Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.
                </p>
              </div>
              <div className="sec5_card">
                <img src={Natural_Scenery_logo_section5} alt=""/>
                <p>Natural Scenery <br/>
                  Cras commodo consequat orci, in convallis risus egestas non.
                </p>
              </div>
            </div>
            <div className="sec5_card_right">
              <div className="sec5_card">
                <img src={Air_Conditioner_logo_section5} alt=""/>
                <p>Air Conditioner <br/>
                  Nullam scelerisque aliquam odio et faucibus.
                </p>
              </div>
              <div className="sec5_card">
                <img src={Storage_Solutions_logo_section5} alt=""/>
                <p>Storage Solutions<br/>
                  Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
                </p>
              </div>
              <div className="sec5_card">
                <img src={Cutlery_Selection_logo_section5} alt=""/>
                <p>Cutlery Selection<br/>
                  Duis tristique sed lorem a vestibulum.
                </p>
              </div>
              <div className="sec5_card">
                <img src={Take_away_Options_logo_section5} alt=""/>
                <p>Take-away Options <br/>
                  Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac,<br/>
                  cursus quam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
