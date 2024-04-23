import React from 'react'
import './Service.css'

export default function Service() {
  return (
    <div className='service'>
      {/* right side */}
      <div className="service-left">
        <span>My Awesome</span>
        <span>Services</span>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <button className='btn service-btn'>Download CV</button>
        <div className="blur service-blur" style={{background: '#ABF1FF94'}}></div>
      </div>
      {/* right side */}
      <div className="service-right">
        I am the right side.
      </div>
    </div>
  )
}
