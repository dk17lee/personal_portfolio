    import React from 'react'

    import Navbar from '../components/Navbar';
    import Footer from '../components/Footer';
    import HeroImg2 from '../components/HeroImg2';
    import AboutContent from '../components/AboutContent';
    
    const about = () => {
      return (
        <div>
          <Navbar/>
          <HeroImg2 heading = "ABOUT" text = "I'm Daniel Lee" />
          <AboutContent/>
          <Footer/>
        </div>
      )
    }
    
    export default about