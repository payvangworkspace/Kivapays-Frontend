import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">KivaPays</div>

        <ul className="nav-menu">
          <li className="nav-item" onMouseEnter={() => toggleDropdown("product")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="nav-link">Products <FaChevronDown className="dropdown-icon" /></span>
            <div className={`dropdown-menu ${activeDropdown === "product" ? "show" : ""}`}>
              <a href="#">Payment Gateway</a>
              <a href="#">Invoices</a>
              <a href="#">Virtual Account</a>
              <a href="#">White Label Solution</a>
            </div>
          </li>

          <li className="nav-item" onMouseEnter={() => toggleDropdown("resources")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="nav-link">Resources <FaChevronDown className="dropdown-icon" /></span>
            <div className={`dropdown-menu ${activeDropdown === "resources" ? "show" : ""}`}>
              <a href="#">Solutions & Features</a>
              <a href="#">FAQ's</a>
              <a href="#">Pricing</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </li>

          <li className="nav-item" onMouseEnter={() => toggleDropdown("company")} onMouseLeave={() => toggleDropdown(null)}>
            <span className="nav-link">Company <FaChevronDown className="dropdown-icon" /></span>
            <div className={`dropdown-menu ${activeDropdown === "company" ? "show" : ""}`}>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </div>
          </li>

          <li className="nav-item"><span className="nav-link">Developers</span></li>
        </ul>

        <button className="login-btn">
          <FiLogIn className="login-icon" /> Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
