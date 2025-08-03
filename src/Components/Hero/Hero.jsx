import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Bhargav Lende,</span> Data Scientist based in India</h1>
      <p>I am an undergard student pursuing BTech in the field of Computer Science and Engineering with specialzation in Data Science</p>
      <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero