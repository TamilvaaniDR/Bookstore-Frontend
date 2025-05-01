import React from 'react';
import './NonFictionPage.css'; // Reuse the same CSS for consistent styling

const SciencePage = () => {
  return (
    <div className="non-fiction-page">
      <h2>Science Books</h2>
      <p>Dive into the wonders of science with books on physics, biology, astronomy, and more.</p>
      <div className="book-list">
        {/* Book 1 */}
        <div className="book-card">
          <img src="/images/science-book1.jpg" alt="Science Book 1" />
          <h3>A Brief History of Time</h3>
          <p>By Stephen Hawking</p>
        </div>

        {/* Book 2 */}
        <div className="book-card">
          <img src="/images/science-book2.jpg" alt="Science Book 2" />
          <h3>The Selfish Gene</h3>
          <p>By Richard Dawkins</p>
        </div>

        {/* Book 3 */}
        <div className="book-card">
          <img src="/images/science-book3.jpg" alt="Science Book 3" />
          <h3>Sapiens: A Brief History of Humankind</h3>
          <p>By Yuval Noah Harari</p>
        </div>

        {/* Book 4 */}
        <div className="book-card">
          <img src="/images/science-book4.jpg" alt="Science Book 4" />
          <h3>Cosmos</h3>
          <p>By Carl Sagan</p>
        </div>

        {/* Book 5 */}
        <div className="book-card">
          <img src="/images/science-book5.jpg" alt="Science Book 5" />
          <h3>The Gene: An Intimate History</h3>
          <p>By Siddhartha Mukherjee</p>
        </div>

        {/* Book 6 */}
        <div className="book-card">
          <img src="/images/science-book6.jpg" alt="Science Book 6" />
          <h3>The Immortal Life of Henrietta Lacks</h3>
          <p>By Rebecca Skloot</p>
        </div>
      </div>
    </div>
  );
};

export default SciencePage;
