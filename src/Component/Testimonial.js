import React from 'react';
import './Testimonials.css';

function Testimonial() {
  return (
    <div className="testimonials">
          <div className="testimonials__heading">
              <h2>What Our Customers Are Saying</h2>
          </div>
          <div className="container">
          
            <div className="testimonials__list">
              <div className="testimonial">
                <img src="https://placekitten.com/100/100" alt="Customer" className="testimonial__image" />
                <p className="testimonial__text">I was blown away by the quality of the shoe cleaning service. My sneakers look brand new again!</p>
                <p className="testimonial__author">Gaorav Rana</p>
              </div>
              <div className="testimonial">
                <img src="https://placekitten.com/100/100" alt="Customer" className="testimonial__image" />
                <p className="testimonial__text">The staff at Shoe Cleaning Website are super friendly and helpful. I highly recommend them!</p>
                <p className="testimonial__author">Pushpraj Bajaj</p>
              </div>
              <div className="testimonial">
                <img src="https://placekitten.com/100/100" alt="Customer" className="testimonial__image" />
                <p className="testimonial__text">I've tried other shoe cleaning services before, but Shoe Cleaning Website is by far the best. Their attention to detail is amazing!</p>
                <p className="testimonial__author">Hardik Bhaskar</p>
              </div>
            </div>
          </div>
    </div>
  );
}

export default Testimonial;
