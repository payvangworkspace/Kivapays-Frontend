import React from 'react'
import Navbar from './Navbar'
import { PaymentGateway } from './PaymentGateway'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const PaymentGatewaySection = () => {
  return (
   <>
   <Navbar/>
   <PaymentGateway/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}
