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
          <div className={`navbar-links ${showMenu ? "active" : "X"}`}>
            <Link to="MainComponent" className="navbar-link" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/aboutUs" className="navbar-link" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/contacts" className="navbar-link" onClick={toggleMenu}>
              Contact Us
            </Link>
            <Link to="/Testimonial" className="navbar-link" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link to="/Faq" className="navbar-link" onClick={toggleMenu}>
              Faq
            </Link>
            <Link to="/placeOrder" className="navbar-link" onClick={toggleMenu}>
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
