import React from 'react'
import Navbar from './Navbar'
import { PrivacyBanner } from './PrivacyBanner'
import PrivacyPolicy from './PrivacyPolicy'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const PrivacyPolicySection = () => {
  return (
<>
<Navbar/>
<PrivacyBanner/>
<PrivacyPolicy/>
<BusinessCreateAccount/>
<Footer/>

</>
  )
}
