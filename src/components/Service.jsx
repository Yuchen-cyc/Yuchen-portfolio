import React, {useContext} from 'react'
import './Service.css'
import Card from './Card'
import Heartemoji from '../img/heartemoji.png'
import Glasses from '../img/glasses.png'
import Humble from '../img/humble.png'
import ResumeCYC from './resumeCYC.pdf'
import { themeContext } from "../Context";

export default function Service() {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='service' id='Services'>
      {/* right side */}
      <div className="service-left">
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <a href={ResumeCYC} download>
          <button className='btn service-btn'>Download CV</button>
        </a>
        <div className="blur service-blur1" style={{background: '#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div className="service-right">
        {/* first card */}
        <div style={ {left: "14rem"} }>
          <Card
            emoji={Heartemoji}
            heading='Design'
            detail='Figma, Sketch, Photoshop, Adobe Suite'
          />
        </div>
        {/* second card */}
        <div style={{top: '12rem', left: '-4rem'}}>
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'HTML, CSS, JavaScript, React, Ruby on Rails'}
          />
        </div>
        {/* third card */}
        <div style={{top: '19rem', left: '12rem'}}>
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={'User friendly, Smooth user interface'}
          />
        </div>
        <div className="blur service-blur2" style={{background: 'var(--purple)'}}></div>
      </div>
    </div>
  )
}
