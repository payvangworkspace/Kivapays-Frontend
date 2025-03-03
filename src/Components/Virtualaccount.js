import React from "react";
import { Link } from "react-router-dom";
import "../Virtualaccount.css"; 

export const Virtualaccount = () => {
  return (
   <div className="virtualaccount-banner">
       <div className="overlay">
         <h1 className="feature-title">Virtual Account</h1>
         <nav className="breadcrumb">
           <Link to="/" className="breadcrumb-link">Home</Link>
           <span className="breadcrumb-separator">|</span>
           <span className="breadcrumb-current">Virtual Account</span>
         </nav>
       </div>
     </div>
  )
}