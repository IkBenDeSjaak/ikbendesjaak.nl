import React from 'react'

import Feature from '../components/Feature/Feature'
import About from '../components/About/About'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

function Home () {
  return (
      <div className='home'>
        <Feature />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}

export default Home