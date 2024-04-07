import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from '../Images/logo.png'
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Shoe Cleaning Co." />
          </Link>
          <div className={`navbar-links ${showMenu ? "active" : ""}`}>
            <Link to="/" className="navbar-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="navbar-link" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="navbar-link" onClick={toggleMenu}>
              Contact Us
            </Link>
            <Link to="/services" className="navbar-link" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/services" className="navbar-link" onClick={toggleMenu}>
              Place Order
            </Link>
          </div>
          <FontAwesomeIcon icon={faBars} className="hamburger-icon" onClick={toggleMenu} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
