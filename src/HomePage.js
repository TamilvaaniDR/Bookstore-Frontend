import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import a CSS file for styling

const HomePage = () => {
  // Function to handle scrolling to categories section
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories');
    categoriesSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">My Bookstore</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><a onClick={scrollToCategories}>Categories</a></li> {/* Changed to a clickable element */}
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/myorders">Myorders</Link></li>
        </ul>
      </nav>

      {/* Header Section */}
      <header className="header">
        <h1>Welcome to My Bookstore</h1>
        <p>Find the perfect book for every mood!</p>
        <Link to="/login" className="get-started-btn">Get Started</Link>
      </header>

      {/* Categories Section */}
      <section id="categories" className="categories">
        <h2>Categories</h2>
        <div className="category-grid">
          <div className="category-card">
            <img src="/images/fiction.jpg" alt="Fiction" />
            <h3><Link to="/fiction">Fiction</Link></h3>
            <p>Immerse yourself in stories.</p>
          </div>
          <div className="category-card">
            <img src="/images/non-fiction.jpg" alt="Non-Fiction" />
            <h3><Link to="/non-fiction">Non-Fiction</Link></h3>
            <p>Learn from the real world.</p>
          </div>
          <div className="category-card">
            <img src="/images/science.jpg" alt="Science" />
            <h3><Link to="/science">Science</Link></h3>
            <p>Explore the wonders of science.</p>
          </div>
          <div className="category-card">
            <img src="/images/children.jpg" alt="Children's Books" />
            <h3><Link to="/children">Children's Books</Link></h3>
            <p>Fun and learning for young minds.</p>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>© 2025 My Bookstore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
