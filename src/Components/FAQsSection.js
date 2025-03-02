import React from 'react'
import Navbar from './Navbar'
import { Faqs } from './Faqs'
import FaqMiddle from './FaqMiddle'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const FAQsSection = () => {
  return (
   <>
   <Navbar/>
   <Faqs/>
   <FaqMiddle/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}
