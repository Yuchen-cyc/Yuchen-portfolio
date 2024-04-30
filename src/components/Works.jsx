import React, {useContext} from 'react';
import './Works.css';
import Upwork from '../img/Upwork.png';
import Fiverr from '../img/fiverr.png';
import Amazon from '../img/amazon.png';
import Shopify from '../img/Shopify.png';
import Facebook from '../img/Facebook.png';
import { themeContext } from "../Context";

export default function Works() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='works'>
      {/* left side */}
      <div className="service-left">
        <span style={{ color: darkMode ? "white" : "" }}>Works for All these</span>
        <span>Brand & Clients</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </span>
        <button className='btn service-btn'>Hire me</button>
        <div className="blur service-blur1" style={{background: '#ABF1FF94'}}></div>
      </div>

      {/* right side */}
      <div className="works-right">
        <div className="works-mainCircle">
          <div className="works-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="works-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="works-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="works-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="works-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </div>
        {/* background-circle */}
        <div className="works-backCircle blueCircle"></div>
        <div className="works-backCircle yellowCircle"></div>
      </div>
    </div>
  )
}
