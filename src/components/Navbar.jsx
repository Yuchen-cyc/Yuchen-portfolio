import React from 'react'
import './Navbar.css'
import Toggle from './Toggle'
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className='nav-container' id='Navbar'>
      <div className="nav-left">
        <div className="nav-name">Yuchen CHEN</div>
        <Toggle/>
      </div>
      <div className="nav-right">
        <div className="nav-list">
          <ul style={{listStyleType: 'none'}}>
            <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass' class='nav-hover'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} class='nav-hover'>
              <li>Services</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true} class='nav-hover'>
              <li>Experience</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} class='nav-hover'>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to='Testimonial' smooth={true} class='nav-hover'>
              <li>Testimonial</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true}>
          <button className="btn">Contact</button>
        </Link>

      </div>

    </div>
  )
}

export default Navbar
