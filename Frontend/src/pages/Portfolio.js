import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import ceoImage from '../assets/ceo.jpg';

const Portfolio = () => {
  // Initialize with your existing reviews plus rating
  const [reviews, setReviews] = useState([
    {
      name: "Ishmil Ansari",
      message: "The team transformed our living space beautifully!",
      rating: 5,
      date: "May 2025"
    },
    {
      name: "Aatika Saquib", 
      message: "Excellent attention to detail and timely work.",
      rating: 5,
      date: "April 2025"
    },
    {
      name: "Karuna Kirti",
      message: "Loved the modern minimalistic design they delivered.",
      rating: 4,
      date: "March 2025"
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', message: '', rating: 5 });
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleStarClick = (rating) => {
    setFormData({ ...formData, rating });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.message.trim()) {
      const newReview = {
        ...formData,
        date: new Date().toLocaleDateString('en-US', { 
          month: 'long', 
          year: 'numeric' 
        })
      };
      setReviews([newReview, ...reviews]); // Add new review at the beginning
      setFormData({ name: '', message: '', rating: 5 });
      setShowForm(false);
    }
  };

  // Generate avatar initials
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  // Generate avatar color based on name
  const getAvatarColor = (name) => {
    const colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57',
      '#FF9FF3', '#54A0FF', '#5F27CD', '#00D2D3', '#FF9F43'
    ];
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  // Render star rating
  const renderStars = (rating, isInteractive = false) => {
    return (
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`star ${star <= (isInteractive ? (hoveredStar || rating) : rating) ? 'filled' : ''}`}
            onClick={isInteractive ? () => handleStarClick(star) : undefined}
            onMouseEnter={isInteractive ? () => setHoveredStar(star) : undefined}
            onMouseLeave={isInteractive ? () => setHoveredStar(0) : undefined}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="portfolio-container" style={{background: 'black'}}>
      <br></br><br></br>
      {/* CEO Section - Keep your existing structure */}
      <section className="ceo-section">
        <img src={ceoImage} alt="CEO" className="ceo-image" />
        <div className="ceo-bio">
          <h2>Mr. Kasim Khan</h2>
          <p>
             Mr. Kasim Khan is the visionary founder and CEO of Hitech Interior. With over 8+ years of experience in modern architectural design and sustainable interiors, he has transformed over 500+ spaces nationwide. Holding a Degree in Civil Engineering, he combines creativity with functionality to deliver exceptional spaces.

          </p>
          <br /><br /><br />
          <p>
              Established in 2018, our company specializes in both interior design and construction services, catering to projects of all sizes and budgets. Whether you need cutting-edge design solutions for your home or need comprehensive construction services, we blend innovation, functionality, and aesthetics to deliver tailored results. With a commitment to quality and creativity, we aim to create spaces that reflect our clients’ unique visions while embracing modern technology and sustainable practice.
          </p>
        </div>
      </section>

      {/* Dynamic Reviews Section - Replacing your static one */}
      <section className="reviews-section" style={{background:'black'}}>
        <h3>What People Say</h3>
        <div className="review-cards">
          {reviews.map((review, index) => (
            <div key={`review-${index}-${review.name}`} className="review-card">
              <div className="review-header">
                <div 
                  className="reviewer-avatar"
                  style={{ backgroundColor: getAvatarColor(review.name) }}
                >
                  {getInitials(review.name)}
                </div>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  {renderStars(review.rating)}
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
              <p className="review-message">"{review.message}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Review Section - Keep your existing structure */}
      <div className="add-review-section" style={{background:'black'}}>
        <h3>Want to share your experience?</h3>
        <button className="btn-review" onClick={() => setShowForm(true)}>Review Here</button>
      </div>

      {/* Enhanced Review Form Popup with Star Rating */}
      {showForm && (
        <div className="review-popup">
          <form onSubmit={handleSubmitReview}>
            <h3>Share Your Experience</h3>
            
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            
            <div className="rating-input">
              <label>Rating:</label>
              {renderStars(formData.rating, true)}
            </div>
            
            <textarea
              placeholder="Your Review"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
            />
            
            <div className="form-buttons">
              <button type="submit">Submit Review</button>
              <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Portfolio;