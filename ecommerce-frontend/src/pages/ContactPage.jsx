import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "support@byshreeram.com",
      description: "We'll reply within 24 hours",
      action: "mailto:support@byshreeram.com",
      color: "#667eea"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+91 98765 43210",
      description: "Mon-Sat, 9:00 AM to 8:00 PM",
      action: "tel:+919876543210",
      color: "#10b981"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Shree RAM Building, Mumbai",
      description: "Get directions to our office",
      action: "https://maps.google.com",
      color: "#f59e0b"
    },
    {
      icon: "💬",
      title: "Live Chat",
      details: "Available 24/7",
      description: "Instant support via chat",
      action: "#chat",
      color: "#8b5cf6"
    }
  ];

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order from the 'My Orders' page or using the tracking link sent to your email."
    },
    {
      question: "What is your return policy?",
      answer: "We offer 7-day returns for most items. Products must be unused and in original packaging."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping delivers in 2-3 business days."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within India. International shipping will be available soon."
    }
  ];

  const helpTopics = [
    { title: "Order Issues", count: 12, icon: "📦" },
    { title: "Shipping & Delivery", count: 8, icon: "🚚" },
    { title: "Returns & Refunds", count: 15, icon: "🔄" },
    { title: "Account & Payment", count: 10, icon: "💳" },
    { title: "Product Questions", count: 25, icon: "❓" },
    { title: "Technical Support", count: 6, icon: "🔧" }
  ];

  return (
    <div className="contact-page">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">We're Here to Help</h1>
          <p className="hero-subtitle">
            Have questions or need assistance? Our support team is ready to help you.
          </p>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
            <div className="stat">
              <div className="stat-number">2h</div>
              <div className="stat-label">Avg. Response Time</div>
            </div>
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        <div className="hero-illustration">
          <div className="support-agent">👨‍💼</div>
          <div className="chat-bubble">💬</div>
          <div className="phone-icon">📞</div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="contact-methods-section">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Choose your preferred way to reach us</p>
        
        <div className="contact-methods-grid">
          {contactMethods.map((method, index) => (
            <a 
              key={index} 
              href={method.action} 
              className="contact-method-card"
              style={{ '--card-color': method.color }}
              target={method.action.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
            >
              <div className="method-icon" style={{ backgroundColor: `${method.color}15`, color: method.color }}>
                <span className="icon-emoji">{method.icon}</span>
              </div>
              <div className="method-content">
                <h3 className="method-title">{method.title}</h3>
                <p className="method-details">{method.details}</p>
                <p className="method-description">{method.description}</p>
              </div>
              <div className="method-action">
                <span className="arrow">→</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="form-container">
          <div className="form-header">
            <div className="form-icon">
              <span className="form-icon-emoji">📩</span>
            </div>
            <div>
              <h2 className="form-title">Send us a Message</h2>
              <p className="form-subtitle">Fill out the form below and we'll get back to you soon</p>
            </div>
          </div>
          
          {submitSuccess && (
            <div className="success-message">
              <div className="success-icon">✅</div>
              <div className="success-content">
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you within 24 hours. Thank you for contacting us.</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">
                <span className="label-emoji">👤</span>
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <span className="label-emoji">📧</span>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email address"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <span className="label-emoji">❓</span>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="What is this regarding?"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">
                <span className="label-emoji">💬</span>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Please describe your issue or question..."
                className="form-textarea"
                rows="5"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  Sending...
                </>
              ) : (
                <>
                  <span className="btn-emoji">📤</span>
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Help Topics */}
      <section className="help-topics-section">
        <h2 className="section-title">Common Help Topics</h2>
        <p className="section-subtitle">Quick answers to frequently asked questions</p>
        
        <div className="topics-grid">
          {helpTopics.map((topic, index) => (
            <div 
              key={index} 
              className="topic-card"
              onClick={() => navigate(`/help/${topic.title.toLowerCase().replace(/ /g, '-')}`)}
            >
              <div className="topic-icon">{topic.icon}</div>
              <div className="topic-content">
                <h3 className="topic-title">{topic.title}</h3>
                <div className="topic-meta">
                  <span className="topic-count">{topic.count} articles</span>
                  <span className="topic-arrow">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="faq-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">Find quick answers to common questions</p>
        </div>
        
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question">
                <span className="faq-number">Q{index + 1}</span>
                <h3>{faq.question}</h3>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="faq-cta">
          <p>Didn't find what you're looking for?</p>
          <button 
            className="view-all-faqs"
            onClick={() => navigate("/faq")}
          >
            View All FAQs
          </button>
        </div>
      </section>

      {/* Business Hours & Info */}
      <section className="business-info-section">
        <div className="info-cards">
          <div className="info-card">
            <div className="info-icon">
              <span className="info-emoji">🕐</span>
            </div>
            <div className="info-content">
              <h3>Business Hours</h3>
              <div className="info-details">
                <p><strong>Monday - Friday:</strong> 9:00 AM - 8:00 PM</p>
                <p><strong>Saturday:</strong> 10:00 AM - 6:00 PM</p>
                <p><strong>Sunday:</strong> 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <span className="info-emoji">📍</span>
            </div>
            <div className="info-content">
              <h3>Our Location</h3>
              <div className="info-details">
                <p><strong>Address:</strong></p>
                <p>Shree RAM Building, 123 Fashion Street</p>
                <p>Mumbai, Maharashtra 400001</p>
                <p>India</p>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <span className="info-emoji">🚨</span>
            </div>
            <div className="info-content">
              <h3>Emergency Contact</h3>
              <div className="info-details">
                <p><strong>For urgent order issues:</strong></p>
                <p className="emergency-number">+91 98765 43210</p>
                <p>Available 24/7 for order emergencies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat CTA */}
      <section className="live-chat-cta">
        <div className="chat-content">
          <div className="chat-icon">💬</div>
          <div>
            <h2>Need Immediate Help?</h2>
            <p>Start a live chat with our support agents now</p>
          </div>
        </div>
        <button 
          className="start-chat-btn"
          onClick={() => {
            // Implement live chat
            alert("Live chat functionality coming soon!");
          }}
        >
          Start Live Chat
        </button>
      </section>

    </div>
  );
};

export default ContactPage;