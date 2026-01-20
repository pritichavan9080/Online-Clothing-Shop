import React from "react";
import "./CelebrationSection.css";

import weddingImg from "../assets/wedding.jpg";
import mehendiImg from "../assets/mehendi.jpg";
import haldiImg from "../assets/haldi.jpg";
import receptionImg from "../assets/reception.jpg";

const CelebrationSection = () => {
  return (
    <div className="celebration-section">
      <h2 className="celebration-title">CELEBRATION COUTURE</h2>

      {/* ROW 1 */}
      <div className="celebration-row">
        <div className="celebration-card">
          <img src={weddingImg} alt="Wedding" />
          
        </div>

        <div className="celebration-card">
          <img src={mehendiImg} alt="Mehendi" />
          
        </div>
      </div>

      {/* ROW 2 */}
      <div className="celebration-row">
        <div className="celebration-card">
          <img src={haldiImg} alt="Haldi" />
          
        </div>

        <div className="celebration-card">
          <img src={receptionImg} alt="Reception" />
          
        </div>
      </div>
    </div>
  );
};

export default CelebrationSection;
