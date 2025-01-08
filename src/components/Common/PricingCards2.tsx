import React from 'react';
import Care from '@/assets/images/icons/care.png';
import empowerment from '@/assets/images/icons/empowerment.png';
import trust from '@/assets/images/icons/trust.png';
import sustainability from '@/assets/images/icons/sustainability.png';

const PricingCards2 = () => {
  return (
    <div className="container">
      <main className="main-content">
        <h1>BUILT ON VALUES, <br /> DRIVEN BY IMPACT</h1>
        <p>Empowering companies through effective solutions since 1975</p>
        <button className="partner-button">Partner With Us</button>

        <div className="values-section">
          <div className="value-item">
            <img src={Care} alt="Care Icon" className="value-icon" />
            <h3>Care</h3>
            <p>We prioritize people, partnerships, and the planet in every decision.</p>
          </div>
          <div className="value-item">
            <img src={sustainability} alt="Sustainability Icon" className="value-icon" />
            <h3>Sustainability</h3>
            <p>Committed to long-term growth that respects our environment.</p>
          </div>
          <div className="value-item">
            <img src={trust} alt="Trust Icon" className="value-icon" />
            <h3>Trust</h3>
            <p>Nurtured over three decades through transparency and reliability.</p>
          </div>
          <div className="value-item">
            <img src={empowerment} alt="Empowerment Icon" className="value-icon" />
            <h3>Empowerment</h3>
            <p>Helping businesses and communities thrive together.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PricingCards2;