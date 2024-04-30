import React from 'react'
import './Navbar.css'
import Toggle from './Toggle'

function Navbar() {
  return (
    <div className='nav-container'>
      <div className="nav-left">
        <div className="nav-name">Yuchen CHEN</div>
        <Toggle/>
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
