import React, { useState } from 'react';
import './Faq.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Using icons for expanding and collapsing

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of shoes can you clean?',
      answer: 'We can clean a variety of shoe types including leather, suede, nubuck, canvas, and more. However, we recommend checking with our team to ensure your specific shoe material is safe for cleaning.'
    },
    {
      question: 'How often should I clean my shoes?',
      answer: 'We recommend cleaning your shoes every 2-4 weeks to maintain their appearance and prolong their lifespan. The frequency depends on how often you wear them and the conditions they are exposed to.'
    },
    {
      question: 'Can you remove tough stains from my shoes?',
      answer: 'We use specialized cleaning techniques and products to remove tough stains from shoes. However, some stains may not be fully removable depending on the type of stain and shoe material.'
    },
    {
      question: 'Do I need any special equipment to clean my shoes?',
      answer: 'Our cleaning products can be used with a soft-bristled brush, microfiber towel, and water. We also offer additional accessories like shoe trees and protective sprays for enhanced care.'
    },
    {
      question: 'Do I need to bring my shoes in for cleaning or can you come to me?',
      answer: 'We offer both drop-off and pick-up shoe cleaning services. You can either drop off your shoes at our location or schedule a pick-up time for us to come to you.'
    },
    {
      question: 'How long does it take to clean my shoes?',
      answer: 'Our cleaning services typically take 1-2 days. However, the time may vary depending on the number of shoes and the cleaning process required.'
    },
    {
      question: 'How do I place an order?',
      answer: 'You can place an order directly through our website. Simply select the products you wish to purchase and follow the checkout process. For assistance, feel free to contact our customer service team.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location and the shipping method selected. We offer both standard and expedited shipping options.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, GooglePay, and PhonePay.'
    },
    {
      question: 'What is the cost for shoe cleaning services?',
      answer: 'Our pricing for shoe cleaning services varies depending on the type of shoe and the extent of cleaning. Please visit our pricing page or contact us for a detailed quote.'
    },
    {
      question: 'Do you offer any warranties or guarantees on your shoe cleaning services?',
      answer: 'We stand behind our work and offer a satisfaction guarantee on all services. If you are not satisfied, please let us know and we will make it right.'
    },
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
        <div className='faq-containerD'>
          <div className="faq-container">
            <h2 className="faq-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div
                    className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon">
                      {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </div>
                  <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>  
  );
}

export default FAQ;
