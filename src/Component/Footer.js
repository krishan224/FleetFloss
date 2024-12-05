import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="row">
          <div className="footer-section">
            <h3 className="footer__heading animated-title">Company Info</h3>
            <ul className="footer__list">
              <li><a href="/" className="footer__link animated-link">About Us</a></li>
              <li><a href="/" className="footer__link animated-link">Contact Us</a></li>
              <li><a href="/" className="footer__link animated-link">Privacy Policy</a></li>
              <li><a href="/" className="footer__link animated-link">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer__heading animated-title">Services</h3>
            <ul className="footer__list">
              <li><a href="/" className="footer__link animated-link">Shoe Cleaning</a></li>
              <li><a href="/" className="footer__link animated-link">Shoe Restoration</a></li>
              <li><a href="/" className="footer__link animated-link">Sneaker Cleaning</a></li>
              <li><a href="/" className="footer__link animated-link">Sneaker Restoration</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer__heading animated-title">Follow Us</h3>
            <ul className="footer__list list--social">
              <li><a className="facebook animated-icon" href="https://facebook.com/visacon"><FaFacebook /></a></li>
              <li><a className="twitter animated-icon" href="https://twitter.com/visacon"><FaXTwitter /></a></li>
              <li><a className="linkedin animated-icon" href="https://linkedin.com"><FaLinkedin /></a></li>
              <li><a className="instagram animated-icon" href="https://instagram.com/visacon"><FaInstagram /></a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer__heading animated-title">Contact Us</h3>
            <ul className="footer__list">
              <p>123 Main Street, Uttar Pradesh, India</p>
              <li><a href="mailto:fleetfloss777@gmail.com" className="footer__link animated-link"><i className="far fa-envelope"></i> fleetfloss777@gmail.com</a></li>
              <li><a href="tel:+91-7579797948" className="footer__link animated-link"><i className="fas fa-phone"></i> +91-7579797948</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
