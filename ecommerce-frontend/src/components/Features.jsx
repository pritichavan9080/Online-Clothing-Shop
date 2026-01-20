// src/components/Features.jsx
import React from "react";
import "./Features.css"; // optional

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="feature">
          <div className="feature-icon">❤️</div>
          <h3>MADE IN INDIA</h3>
          <p>Our products are truly Made in India</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>FREE DELIVERY</h3>
          <p>Enjoy free delivery on all orders</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🎁</div>
          <h3>EASY RETURNS</h3>
          <p>Shop with confidence, enjoy easy returns</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💬</div>
          <h3>TOP-NOTCH SUPPORT</h3>
          <p>Experience best support, ensuring your satisfaction</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🛡️</div>
          <h3>SECURE PAYMENTS</h3>
          <p>Shop securely with our trusted payment options</p>
        </div>
      </div>
    </section>
  );
};

export default Features; // ✅ Must be default export
