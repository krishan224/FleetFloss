import React, { useState } from 'react';
// import './Contact.css';
import { db, auth } from './firebase';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmits = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        `${phoneNumber}@shoecleaningwebsite.com`, 
        'password123'
      );

      await db.collection('messages').add({
        name: name,
        email: userCredential.user.email,
        phone: phoneNumber,
        subject: subject,
        message: message,
      });

      alert('Message sent successfully!');
      setName('');
      setEmail('');
      setPhoneNumber('');
      setSubject('');
      setMessage('');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2 className="animated-heading">Contact Us</h2>
        <p className="animated-text">
          Have a question or concern? Reach out to our team and we'll get back to you.
        </p>
        <ul className="contact-list">
          <li>Phone: 555-555-5555</li>
          <li>Email: info@shoecleaningwebsite.com</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </div>
      <div className="contact-form">
        <form onSubmit={handleSubmits}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="form-input"
          />
          
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
          
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            className="form-input"
          />
          
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            className="form-input"
          />
          
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="form-input"
          ></textarea>

          {error && <p className="error-message">{error}</p>}
          
          <button type="submit" className={`submit-btn ${loading ? 'loading' : ''}`}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
