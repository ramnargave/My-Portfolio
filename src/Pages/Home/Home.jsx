import React from 'react'
import HeroDection from '../../Components/HeroSection/HeroDection.jsx'
import About from '../../Components/About/About.jsx'
// import ParticlesBackground from '../../UI/Particalsbackgroud/ParticalsBackground.jsx'
import Eduction from '../../Components/Eduction/Eduction.jsx'
import Tools from '../../Components/Tools/Tools.jsx'
import HomeProject from '../../Components/HomeProject/HomeProject.jsx'
import Footer from '../../Components/Footer/Footer.jsx'
import WorkExperience from '../../Components/Work/WorkExperience.jsx'
import Contact from '../../Components/Contact/Contact.jsx'
// import CustomCursor from '../../UI/Cursor/CustomCursor.jsx'

function Home() {
  return (
    <>
        {/* <ParticlesBackground/> */}
        <div className='pl-0 pr-0 lg:pl-40 lg:pr-40 md:pl-10 md:pr-10 border-amber-400'>
            <HeroDection/>
            <About/>
            <Eduction/>
            <Tools/>
            <HomeProject/>
            <WorkExperience />
            <Contact />
            <Footer />
        </div>
    </>
  )
}

export default React.memo(Home);