
import React, { useState } from 'react';
import './Contact.css';
import { db, auth } from './firebase';
//import handleSubmits from './Useful';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmits =async (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(`${phoneNumber}@shoecleaningwebsite.com`, 'password123')
      .then((userCredential) => {
        db.collection('messages').add({
          name: name,
          email: userCredential.user.email,
          phone: phoneNumber,
          subject: subject,
          message: message,
        })
        .then(() => {
          alert('Message sent successfully!');
          setName('');
          setEmail('');
          setPhoneNumber('');
          setSubject('');
          setMessage('');
        })
        .catch((error) => {
          console.error('Error sending message: ', error);
        });
      })
      .catch((error) => {
        console.error('Error creating user account: ', error);
      });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have a question or concern? Reach out to our team and we'll get back to you
        </p>
        <ul>
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
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
export default Contact