import React from 'react';
import {  FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="underComponent">
            <h3 className="footer__heading">Company Info</h3>
            <ul className="footer__list">
              <li><a href="/" className="footer__link">About Us</a></li>
              <li><a href="/" className="footer__link">Contact Us</a></li>
              <li><a href="/" className="footer__link">Privacy Policy</a></li>
              <li><a href="/" className="footer__link">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div className="underComponent">
            <h3 className="footer__heading">Services</h3>
            <ul className="footer__list">
              <li><a href="/" className="footer__link">Shoe Cleaning</a></li>
              <li><a href="/" className="footer__link">Shoe Restoration</a></li>
              <li><a href="/" className="footer__link">Sneaker Cleaning</a></li>
              <li><a href="/" className="footer__link">Sneaker Restoration</a></li>
            </ul>
          </div>
          <div className="underComponent">
            <h3 className="footer__heading">Follow Us</h3>
            <ul className="footer__list list--social">
            <li><a className="facebook" href="https://facebook.com/visacon"><FaFacebook /></a></li>
              <li><a className='Xtwitter' href="https://twitter.com/visacon"><FaXTwitter /></a></li>
              <li><a className='linkedin' href='https://linkedin.com'><FaLinkedin /></a></li>
              <li><a className='instagram' href="https://instagram.com/visacon"><FaInstagram /></a></li>
            </ul>
          </div>
          <div className="underComponent">
            <h3 className="footer__heading">Contact Us</h3>
            <ul className="footer__list">
              <li><a href="/" className="footer__link"><i className="fas fa-map-marker-alt"></i> 123 Main Street, Anytown USA 12345</a></li>
              <li><a href="/" className="footer__link"><i className="far fa-envelope"></i> fleetfloss777@gmail.com</a></li>
              <li><a href="/" className="footer__link"><i className="fas fa-phone"></i>+91-7579797948</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
