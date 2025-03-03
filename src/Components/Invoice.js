import React from "react";
import { Link } from "react-router-dom";
import "../Invoice.css"; 

export const Invoice = () => {
  return (
   <div className="invoice-banner">
       <div className="overlay">
         <h1 className="feature-title">Invoice</h1>
         <nav className="breadcrumb">
           <Link to="/" className="breadcrumb-link">Home</Link>
           <span className="breadcrumb-separator">|</span>
           <span className="breadcrumb-current">Invoice</span>
         </nav>
       </div>
     </div>
  )
}