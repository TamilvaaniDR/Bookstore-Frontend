// LandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section with Carousel */}
      <div className="hero-carousel">
        <div className="carousel-slide active">
          <img src="/images/books-hero1.jpg" alt="Books" />
          <div className="carousel-text">
            <h1>Welcome to My Bookstore</h1>
            <p>Your gateway to endless stories and knowledge!</p>
            <Link to="/login" className="cta-btn">Join Us Today</Link>
          </div>
        </div>
        <div className="carousel-slide">
          <img src="/images/books-hero2.jpg" alt="Reading" />
          <div className="carousel-text">
            <h1>Discover Your Next Favorite Book</h1>
            <p>Handpicked collections for every taste.</p>
            <Link to="/home" className="cta-btn">Browse Categories</Link>
          </div>
        </div>
      </div>

      {/* What Makes Us Unique Section */}
      <section className="unique-features">
        <h2>Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/images/unique-selection.jpg" alt="Selection" />
            <h3>Curated Collections</h3>
            <p>Find rare and unique books tailored to your interests.</p>
          </div>
          <div className="feature-card">
            <img src="/images/fast-delivery.jpg" alt="Delivery" />
            <h3>Fast Delivery</h3>
            <p>Enjoy quick and reliable delivery to your doorstep.</p>
          </div>
          <div className="feature-card">
            <img src="/images/community.jpg" alt="Community" />
            <h3>Reader Community</h3>
            <p>Join a vibrant community of book lovers.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Readers Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial-card">
            <p>"A treasure trove of books! I always find what I’m looking for."</p>
            <h4>- Sarah M.</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fast delivery and excellent customer service. Highly recommended!"</p>
            <h4>- John D.</h4>
          </div>
          <div className="testimonial-card">
            <p>"This bookstore has reignited my love for reading."</p>
            <h4>- Emma R.</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 My Bookstore. All rights reserved.</p>
        <p>
          Follow us on:
          <a href="#" className="social-link">Facebook</a> | 
          <a href="#" className="social-link">Instagram</a> | 
          <a href="#" className="social-link">Twitter</a>
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
