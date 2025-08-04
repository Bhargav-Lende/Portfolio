import React from 'react'
import './NavBar.css'
import logo from '../../assets/logo3.png'

const NavBar = () => {
  return (
    <div className='navbar'>
      {/*<img src = {logo} alt = "" />*/}
      <div className='logo'>
        <h><b><span>Bhargav.</span></b></h>
      </div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Certifications</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Connect with me</div>
    </div>
  )
}

export default NavBar