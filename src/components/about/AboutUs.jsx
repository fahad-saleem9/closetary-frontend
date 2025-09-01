import React from 'react'
import AboutIntro from './AboutIntro'
import AboutImages from './AboutImages'
import AboutMission from './AboutMission'
import AboutStats from './AboutStats'
import AboutStory from './AboutStory'

function AboutUs() {
  return (
    <section id="about">   
      <AboutIntro/>
      <AboutImages/>
      <AboutMission/>
      <AboutStats/>
      <AboutStory/>
    </section>
  )
}

export default AboutUs
