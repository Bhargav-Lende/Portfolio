import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Certifications from './Components/Certifications/Certifications'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Certifications/>
    </div>
  )
}

export default App