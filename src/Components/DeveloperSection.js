import React from 'react'
import Navbar from './Navbar'
import { DeveloperBanner } from './DeveloperBanner'
import IntegrationSection from './IntegrationSection'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const DeveloperSection = () => {
  return (
<>
<Navbar/>
<DeveloperBanner/>
<IntegrationSection/>
<BusinessCreateAccount/>
<Footer/>

</>
  )
}
