import React from 'react'
import Skills from './Skills'
import About from './About'
import Projects from './Projects'
import Contacts from './Contacts'

const SkAb = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default SkAb
