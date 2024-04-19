import React from 'react'
import './Intro.css'
import Github from '../img/github.png'
import Linkedin from '../img/linkedin.png'
import Instagram from '../img/instagram.png'

export default function Intro() {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-name">
          <span> Hey! I Am</span>
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
        I am the right side.
      </div>
    </div>
  )
}
