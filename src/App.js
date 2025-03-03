import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import './App.css';
import { SolutionsAndFeatures } from "./Components/SolutionsAndFeatures";
import { FAQsSection } from "./Components/FAQsSection";
import { PricingSection } from "./Components/PricingSection";
import { TermsAndConditionSection } from "./Components/TermsAndConditionSection";
import { PrivacyPolicySection } from "./Components/PrivacyPolicySection";
import { AboutUsSection } from "./Components/AboutUsSection";
import './AboutUs.css';
import './ContactUsBanner.css';
import { ContactUsSection } from "./Components/ContactUsSection";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<SolutionsAndFeatures />} />
          <Route path="/faqs" element={<FAQsSection />} />
          <Route path="/pricing" element={<PricingSection />} />
          <Route path="/terms" element={<TermsAndConditionSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicySection />} />
          <Route path="/about" element={<AboutUsSection />} />
          <Route path="/contact" element={<ContactUsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
