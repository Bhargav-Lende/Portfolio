import React, { useState } from 'react'
import './NavBar.css'
import logo from '../../assets/logo3.png'
import nav_underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = () => {

const[menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      {/*<img src = {logo} alt = "" />*/}
      <div className='logo'>
        <h><b><span>Bhargav.</span></b></h>
      </div>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Certifications</p></AnchorLink>{menu==="services"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#techstack'><p onClick={()=>setMenu("techstack")}>Projects</p></AnchorLink>{menu==="techstack"?<img src={nav_underline} alt=''/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={nav_underline} alt=''/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default NavBar