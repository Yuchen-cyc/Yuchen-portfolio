import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='nav-container'>
      <div className="nav-left">
        <div className="nav-name">Yuchen CHEN</div>
        <span>Toggle</span>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul style={{listStyleType: 'none'}}>
            <li>Home</li>
            <li>Skill</li>
            <li>Experience</li>
            <li>Portfolio</li>
          </ul>
        </div>
        <button className="btn">Contact me</button>
      </div>

    </div>
  )
}

export default Navbar
