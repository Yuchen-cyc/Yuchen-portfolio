import React from 'react';
import './Footer.css';
import Wave from '../img/wave.png';
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

export default function Footer() {
  return (
    <div className='footer'>
      <img src={Wave} alt="" style={{width: '100%'}} />
      <div className="footer-content">
        <span>joyce.yuchen.chen@gmail.com</span>
        <div className="footer-icons">
          <a href="https://www.instagram.com/joyce.cyc/"><Insta color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/yuchen-chen-joyce/"><LinkedIn color="white" size={"3rem"} /></a>
          <a href="https://github.com/Yuchen-cyc"><Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  )
}
