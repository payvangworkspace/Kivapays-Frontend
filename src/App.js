import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import './App.css';
import { SolutionsAndFeatures } from "./Components/SolutionsAndFeatures";
import { FAQsSection } from "./Components/FAQsSection";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<SolutionsAndFeatures />} />
          <Route path="/faqs" element={<FAQsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
