import React from 'react';
import offer1 from './img/offer1.png';
import offer2 from './img/offer2.png';
import offer3 from './img/offer3.png';
import offer4 from './img/offer4.png';
import offer5 from './img/offer5.png';
import './Offer.css';
const Services = () => {
  const servicesData = [
    {
      title: 'Free Shipping',
      description: 'From all orders over Rs. 50000',
      img: offer1,
    },
    {
      title: 'Daily Surprise Offers',
      description: 'Save up to 25% off',
      img: offer2,
    },
    {
      title: 'Support 24/7',
      description: 'Shop with an expert',
      img: offer3,
    },
    {
      title: 'Affordable Prices',
      description: 'Get Factory direct price',
      img: offer4,
    },
    {
      title: 'Secure Payment',
      description: '100% Protected Payments',
      img: offer5,
    },
  ];

  return (
    <div className="services">
      {servicesData.map((service, index) => (
        <div key={index} className="service">
          <img src={service.img} alt={`Service ${index + 1}`} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
