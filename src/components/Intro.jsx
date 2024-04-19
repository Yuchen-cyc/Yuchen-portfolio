import React from 'react'
import './Intro.css'

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
      </div>
      <div className="intro-right">
        I am the right side.
      </div>
    </div>
  )
}
