import React, { useState } from 'react';
import './Faq.css'

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: ' What types of shoes can you clean?',
      answer: 'We can clean a variety of shoe types including leather, suede, nubuck, canvas, and more. However, we recommend checking with our team to ensure your specific shoe material is safe for cleaning.'
    },
    {
      question: ' How often should I clean my shoes?',
      answer: '  We use specialized cleaning techniques and products to remove tough stains from shoes. However, please note that some stains may not be fully removable depending on the type of stain and shoe material.'},
    {
      question: 'Can you remove tough stains from my shoes?      ',
      answer: 'It depends on how frequently you wear your shoes and the conditions they are exposed to. As a general rule, we recommend cleaning your shoes every 2-4 weeks to maintain their appearance and prolong their lifespan.',
    },
    {
      question: 'Do I need any special equipment to clean my shoes?',
      answer: 'Our products can be used with a soft-bristled brush, microfiber towel, and water. However, we also offer a range of accessories such as shoe trees and protective sprays that can help keep your shoes in top condition.',
    },
    {
      question: 'Do I need to bring my shoes in for cleaning or can you come to me',
      answer: 'A: We offer both drop-off and pick-up shoe cleaning services. You can drop off your shoes at our location or schedule a pick-up time for us to come to you.',   },
    {
      question: 'How long does it take to clean my shoes?',
      answer: 'A: Our shoe cleaning services typically take 1-2 days to complete. However, the turnaround time may vary depending on the number of shoes you need cleaned and the extent of cleaning required.',
    },
    {
      question: 'How do I place an order?',
      answer: 'You can place an order directly through our website. Simply select the products you wish to purchase and follow the checkout process. If you have any questions or need assistance, please contact our customer service team.',
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping times vary depending on your location and the shipping method you select. We offer both standard and expedited shipping options. Please refer to our shipping policy for more information.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, GooglePay, and Phonepay.',
    },
    {
      question: ' What is the cost for shoe cleaning services?',
      answer: ' Our pricing for shoe cleaning services varies depending on the type of shoe and the extent of cleaning required. Please contact us for a quote or visit our pricing page for more information.',
    },
    {
      question: 'Do you offer any warranties or guarantees on your shoe cleaning services?',
      answer: 'We stand behind our work and offer a satisfaction guarantee on all shoe cleaning services. If you are not completely satisfied with our work, please let us know and we will do our best to make it right.',
    },
  ];

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div>
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, index) => (
        <div key={index}>
          <button className="faq-question" onClick={() => handleClick(index)}>
            {faq.question}
          </button>
          <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
