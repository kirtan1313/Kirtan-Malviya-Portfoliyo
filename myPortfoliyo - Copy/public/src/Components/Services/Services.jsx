import React from 'react';
import { motion } from 'framer-motion';
import './Service.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Services() {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="services-heading">My <span className="highlight">Services</span></h2>
        <div className="services-container">
          {[ 
            { icon: '🚀', title: 'Frontend Developer', description: 'Crafting stunning, responsive UI with React & React Bootstrap' },
            { icon: '💻', title: 'Backend Developer', description: 'Developing secure & scalable backend solutions with Node.js & Express.' },
            { icon: '🌍', title: 'MERN Stack Developer', description: 'Building full-stack applications with MongoDB, Express, React, and Node.js.' }
          ].map((service, index) => (
            <motion.div 
              className="service-card"
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
