import React from 'react'
import Navbar from './Navbar'
import { PricingMiddle } from './PricingMiddle'
import PricingTable from './PricingTable'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
export const PricingSection = () => {
  return (
    <>
    <Navbar/>
<PricingMiddle/>
<PricingTable/>
<BusinessCreateAccount/>
<Footer/>
    
    </>
  )
}
