import React from "react";
import Navbar from "./Navbar";
import ContactUsBanner from "./ContactUsBanner";
import Footer from "./Footer";
import BusinessCreateAccount from "./BusinessCreateAccount";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm";

export const ContactUsSection = () => {
  return (
    <>
      <Navbar />
      <ContactUsBanner />
      <ContactSection/>
      <ContactForm/>
      <BusinessCreateAccount/>
      <Footer />
    </>
  );
};


