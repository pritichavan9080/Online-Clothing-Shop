

import "./OrderProgress.css";
import statusSteps from "./statusSteps";
import { useEffect, useState } from "react";

const steps = [
  { title: "Placed", icon: "📝", description: "Order received" },
  { title: "Confirmed", icon: "✅", description: "Order confirmed" },
  { title: "Shipped", icon: "🚚", description: "Order dispatched" },
  { title: "Out for Delivery", icon: "📦", description: "On the way" },
  { title: "Delivered", icon: "🏠", description: "Delivered successfully" }
];

const OrderProgress = ({ status, placedDate, orderId, totalAmount }) => {
  const currentStep = Math.min(Math.max(statusSteps[status] || 1, 1), steps.length);
  
  // Calculate delivery date with animation
  const [deliveryDate, setDeliveryDate] = useState("");
  const [daysRemaining, setDaysRemaining] = useState(null);
  
  useEffect(() => {
    if (placedDate) {
      try {
        const placed = new Date(placedDate);
        if (!isNaN(placed.getTime())) {
          const delivery = new Date(placed);
          delivery.setDate(delivery.getDate() + 5);
          
          if (!isNaN(delivery.getTime())) {
            // Format date nicely
            const options = { weekday: 'long', month: 'long', day: 'numeric' };
            setDeliveryDate(delivery.toLocaleDateString('en-US', options));
            
            // Calculate days remaining
            const today = new Date();
            const diffTime = delivery - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            setDaysRemaining(diffDays > 0 ? diffDays : 0);
          }
        }
      } catch (error) {
        console.error("Error parsing date:", error);
      }
    }
  }, [placedDate]);

  // Calculate progress percentage
  const progressPercentage = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="order-progress-container">
      {/* Header with Order Info */}
      <div className="order-header">
        <div>
          <h2 className="order-title">Order Tracking</h2>
          <p className="order-id">Order ID: <span>{orderId || "#27"}</span></p>
        </div>
        <div className="order-summary">
          <div className="total-amount">
            <span className="amount-label">Total Amount</span>
            <span className="amount-value">₹{totalAmount || "799"}</span>
          </div>
          <div className="order-date">
            <span className="date-label">Order Date</span>
            <span className="date-value">
              {placedDate ? new Date(placedDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              }) : "4 Jan 2026"}
            </span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="progress-section">
        <div className="progress-header">
          <h3>Order Status: <span className="current-status">{steps[currentStep - 1]?.title}</span></h3>
          <div className="progress-percentage">{Math.round(progressPercentage)}% Complete</div>
        </div>
        
        <div className="progress-bar-container">
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${progressPercentage}%` }}
            />
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`progress-marker ${index + 1 <= currentStep ? 'active-marker' : ''}`}
                style={{ left: `${(index / (steps.length - 1)) * 100}%` }}
              >
                {index + 1 <= currentStep ? (
                  <div className="marker-dot active-dot">✓</div>
                ) : (
                  <div className="marker-dot"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="timeline-container">
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber <= currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div 
              key={step.title} 
              className={`timeline-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}
            >
              <div className="step-indicator">
                <div className={`step-icon ${isCompleted ? 'completed-icon' : ''}`}>
                  {isCompleted ? "✓" : step.icon}
                </div>
                <div className="step-connector"></div>
              </div>
              
              <div className="step-content">
                <div className="step-header">
                  <h4 className="step-title">{step.title}</h4>
                  {isCurrent && <span className="current-badge">Current</span>}
                  {isCompleted && <span className="completed-badge">Completed</span>}
                </div>
                <p className="step-description">{step.description}</p>
                {isCurrent && daysRemaining !== null && daysRemaining > 0 && (
                  <div className="step-eta">
                    <span className="eta-icon">⏱️</span>
                    Estimated: {daysRemaining} day{daysRemaining !== 1 ? 's' : ''}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Delivery Information */}
      {status !== "DELIVERED" && deliveryDate && (
        <div className="delivery-card">
          <div className="delivery-header">
            <div className="delivery-icon">📦</div>
            <div>
              <h3>Estimated Delivery</h3>
              <p>Your order is on its way!</p>
            </div>
          </div>
          <div className="delivery-info">
            <div className="delivery-date">
              <span className="date-label">Expected by</span>
              <span className="date-value">{deliveryDate}</span>
            </div>
            <div className="delivery-progress">
              <div className="progress-stats">
                <span>Progress: {currentStep} of {steps.length} steps</span>
                <span>{Math.round(progressPercentage)}%</span>
              </div>
              <div className="mini-progress-bar">
                <div 
                  className="mini-progress-fill" 
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Details Button */}
      {/* <div className="action-buttons">
        <button className="view-details-btn">
          <span>View Order Details</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="help-btn">
          <span>Need Help?</span>
        </button>
      </div> */}
    </div>
  );
};

export default OrderProgress;