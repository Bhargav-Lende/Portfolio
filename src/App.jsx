import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'
import TechStack from './Components/TechStack/TechStack'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Certifications/>
      <TechStack/>
      <Contact/>
    </div>
  )
}

export default App