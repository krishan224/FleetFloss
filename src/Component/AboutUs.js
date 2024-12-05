import React from 'react';
import './AboutUs.css';
import MainImage from '../Images/mainitem.jpeg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1 className="animated-title">Welcome to our Shoe Cleaning Service!</h1>
      <div className="image-container animated-image">
        <img src={MainImage} alt="Shoe cleaning service" />
      </div>
      <div className="content">
        <p className="animated-text">At our shoe cleaning website, we take pride in offering advanced and modern solutions to keep your shoes clean, fresh, and looking like new. Our team of shoe experts is dedicated to providing you with the highest quality shoe cleaning service in the industry.</p>
        <p className="animated-text">Our state-of-the-art cleaning process uses the latest technology to remove dirt, stains, and odors from your shoes. We understand the importance of maintaining the integrity of your footwear, and we use only the best products and techniques to ensure that your shoes are cleaned to perfection.</p>
        <p className="animated-text">We also offer a range of additional services, including shoe deodorizing and customization. Our shoe deodorizing process uses advanced techniques to eliminate even the most stubborn odors from your shoes, leaving them smelling fresh and clean.</p>
        <p className="animated-text">At our shoe cleaning website, we believe that your shoes are more than just a fashion statement – they are a reflection of who you are. That's why we are committed to providing you with the best shoe cleaning service possible, so you can step out in style and confidence.</p>
        <p className="animated-text">Thank you for choosing our shoe cleaning website. We look forward to serving you soon!</p>
      </div>
    </div>
  );
};

export default AboutUs;
