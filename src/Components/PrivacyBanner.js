import React from 'react'

import { Link } from "react-router-dom";
import "../PrivacyBanner.css"

export const PrivacyBanner = () => {
  return (
    <div className="feature-banner">
    <div className="overlay">
      <h1 className="feature-title">Privacy Policy</h1>
      <nav className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">|</span>
        <span className="breadcrumb-current">Privacy Policy</span>
      </nav>
    </div>
  </div>
  )
}
