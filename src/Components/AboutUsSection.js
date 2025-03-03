import React from "react";
import Navbar from "./Navbar";
import AboutUsBanner from "./AboutUsBanner"; // Make sure this is correctly exported
import AboutUs from "./AboutUs"; 
import Footer from "./Footer";
import BusinessCreateAccount from "./BusinessCreateAccount";
export const AboutUsSection = () => {
  return (
    <>
      <Navbar />
      <AboutUsBanner />
      <AboutUs />
      <BusinessCreateAccount/>
      <Footer />
    </>
  );
};


