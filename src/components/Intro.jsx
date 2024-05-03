import React, {useContext} from 'react';
import './Intro.css';
import FloatingDiv from './FloatingDiv';
import Github from '../img/github.png';
import Linkedin from '../img/linkedin.png';
import Instagram from '../img/instagram.png';
import Vector1 from '../img/Vector1.png';
import Vector2 from '../img/Vector2.png';
import Boy from '../img/boy.png';
import Thumbup from '../img/thumbup.png';
import Crown from '../img/crown.png';
import glassesimoji from '../img/glassesimoji.png';
import { themeContext } from "../Context";
// import { motion } from 'framer-motion'

export default function Intro() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // const transition = {duration: 2, type: 'spring'};

  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-name">
          <span style={{ color: darkMode ? "white" : "" }}> Hey! I Am</span>
          <span>Yuchen CHEN</span>
          <span>I am a junior front-end developer with a background in communication.
            I love writing quality code and reading, can't wait to bring fresh ideas to you!
          </span>
        </div>
        <button className='btn intro-btn'>Hire me</button>
        <div className="intro-link">
          <a href="https://github.com/Yuchen-cyc" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="" className='intro-link-img'/>
          </a>
          <a href="https://www.linkedin.com/in/yuchen-chen-joyce/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="" className='intro-link-img'/>
          </a>
          <a href="https://www.instagram.com/joyce.cyc/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="" className='intro-link-img'/>
          </a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Boy} alt="" />
        <img
          // initial={{ left: "-36%" }}
          // whileInView={{ left: "-24%" }}
          // transition={transition}
          src={glassesimoji}
          alt=""
        />
        {/* <motion.div
        initial={{ top: "-4%", left: "74%" }}
        whileInView={{ left: "68%" }}
        transition={transition}
        className="floating-div"
        >
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </motion.div> */}
        <div style={{top: '-4%', left: '58%'}}>
          <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top: '18.2rem', left: '1.2rem'}}>
          <FloatingDiv image={Thumbup} txt1='Front-end' txt2='Developer'/>
        </div>

        {/* blur divs */}
        <div className="blur" style={{background: 'rgb(238 210 255)'}}></div>
        <div className="blur" style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}}></div>
      </div>
    </div>
  )
}
