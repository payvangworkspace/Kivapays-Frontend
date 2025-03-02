import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ContactSection from './ContactSection'
import CardSlider from './CardSlider'
import BusinessSection from './BusinessSection'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import AnimatedStats from './AnimatedStats'
import ModernSection from './ModernSection'
import ClientUnderstanding from './ClientUnderstanding'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
export const Home = () => {
  return (
   <>
     <Navbar/>
    <HeroSection/>
    <ContactSection/>
    <CardSlider/>
    <BusinessSection/>
    <RightSection/>
    <LeftSection/>
    <AnimatedStats/>
    <ModernSection/>
    <ClientUnderstanding/>
    <BusinessCreateAccount/>
    <Footer/>
   </>
  )
}
