import React from 'react';
import './Contact.css';

const Contact = () => {

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have a question or concern? Reach out to our team and we'll get back to you.</p>
        <ul>
          <li>Phone: +91-7579797948</li>
          <li>Email: fleetfloss23@gmail.com</li>
          <li>Address: 123 Main Street, Anytown USA</li>
        </ul>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" />
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" name="subject" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
