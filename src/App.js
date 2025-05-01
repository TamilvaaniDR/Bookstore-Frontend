import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage'; // Import Home Page component
import FictionPage from './pages/FictionPage'; // Import Fiction Page component
import NonFictionPage from './pages/NonFictionPage'; // Import Non-Fiction Page component
import SciencePage from './pages/SciencePage'; // Import Science Page component
import ChildrenPage from './pages/ChildrenPage'; // Import Children Page component
import LoginPage from './LoginPage'; // Import LoginPage component
import SignUpPage from './SignUpPage'; // Import SignUpPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="landing-page">
              {/* Landing Page Content */}
              <nav className="navbar">
                <h1 className="logo">My Bookstore</h1>
                <ul className="nav-links">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/login">Login</Link></li> {/* Login Link */}
                </ul>
              </nav>

              <header className="header">
                <h1>Welcome to My Bookstore</h1>
                <p>Find the perfect book for every mood!</p>
                <Link to="/home" className="get-started-btn">Get Started</Link>
              </header>

              <section className="categories">
                <h2>Browse Our Categories</h2>
                <div className="category-grid">
                  <div className="category-card">
                    <img src="/images/fiction.jpg" alt="Fiction" />
                    <h3><Link to="/fiction">Fiction</Link></h3>
                  </div>
                  <div className="category-card">
                    <img src="/images/non-fiction.jpg" alt="Non-Fiction" />
                    <h3><Link to="/non-fiction">Non-Fiction</Link></h3>
                  </div>
                  <div className="category-card">
                    <img src="/images/science.jpg" alt="Science" />
                    <h3><Link to="/science">Science</Link></h3>
                  </div>
                  <div className="category-card">
                    <img src="/images/children.jpg" alt="Children's Books" />
                    <h3><Link to="/children">Children's Books</Link></h3>
                  </div>
                </div>
              </section>

              <footer className="footer">
                <p>© 2025 My Bookstore. All rights reserved.</p>
              </footer>
            </div>
          }
        />

        {/* Other Routes */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/fiction" element={<FictionPage />} />
        <Route path="/non-fiction" element={<NonFictionPage />} />
        <Route path="/science" element={<SciencePage />} />
        <Route path="/children" element={<ChildrenPage />} />

        {/* Login and SignUp Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
};

export default App;
