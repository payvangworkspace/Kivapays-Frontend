import React from 'react'
import Navbar from './Navbar'
import { TermsAndConditionBanner } from './TermsAndConditionBanner'
import TermsAndConditions from './TermsAndConditions'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
export const TermsAndConditionSection = () => {
  return (
  <>
  <Navbar/>
  <TermsAndConditionBanner/>
  <TermsAndConditions/>
  <BusinessCreateAccount/>
  <Footer/>
  </>
  )
}
