// src/Contact.js

import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  // State management for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation
  const validateForm = () => {
    const { name, email, phoneNumber, subject, message } = formData;
    if (!name || !email || !phoneNumber || !subject || !message) {
      return 'Please fill in all fields.';
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address.';
    }
    return '';
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const errorMessage = validateForm();
    if (errorMessage) {
      setResponseMessage(errorMessage);
      return;
    }

    setIsSubmitting(true);
    setResponseMessage('');

    // Simulating an API call (you can replace this with real backend logic)
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phoneNumber: '', subject: '', message: '' });
      setResponseMessage('Your message has been sent successfully!');
    }, 2000);
  };

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
        {responseMessage && <div className="response-message">{responseMessage}</div>}
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <div className="loading-spinner"></div> : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
