import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Projects from './projects/Projects';
import Certificates from './certifications/Certificates';
import Contact from './contact/Contact';

function Pages() {
  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Certificates />
    <Contact />
    </>
  )
}

export default Pages;