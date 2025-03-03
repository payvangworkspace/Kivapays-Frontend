import React from 'react'
import Navbar from './Navbar'
import { Whitelabel } from './Whitelabel'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const WhitelabelSection = () => {
  return (
   <>
   <Navbar/>
   <Whitelabel/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}