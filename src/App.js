import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import './App.css';
import { SolutionsAndFeatures } from "./Components/SolutionsAndFeatures";
import { FAQsSection } from "./Components/FAQsSection";
import { PricingSection } from "./Components/PricingSection";
import { TermsAndConditionSection } from "./Components/TermsAndConditionSection";
import { PrivacyPolicySection } from "./Components/PrivacyPolicySection";
import { DeveloperSection } from "./Components/DeveloperSection";
import { PaymentGatewaySection } from "./Components/PaymentGatewaySection";
import {InvoiceSection} from "./Components/InvoiceSection";
import { ViratualaccountSection } from "./Components/VirtualaccountSection";
import { WhitelabelSection } from "./Components/WhitelabelSection";

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
          <Route path="/developers" element={<DeveloperSection />} />
          <Route path="/payment-gateway" element={<PaymentGatewaySection />} />
          <Route path="/invoices" element={<InvoiceSection />} />
          <Route path="/virtual-account" element={<ViratualaccountSection />} />
          <Route path="//white-label" element={<WhitelabelSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
