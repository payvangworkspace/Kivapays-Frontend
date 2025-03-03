import React from 'react'
import Navbar from './Navbar'
import { Invoice } from './Invoice'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const InvoiceSection = () => {
  return (
   <>
   <Navbar/>
   <Invoice/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}