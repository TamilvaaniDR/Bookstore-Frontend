import React from 'react';
import './NonFictionPage.css'; // Reuse the same CSS for consistent styling

const FictionPage = () => {
  return (
    <div className="non-fiction-page">
      <h2>Fiction Books</h2>
      <p>Step into a world of imagination with novels, fantasy, mysteries, and more.</p>
      <div className="book-list">
        {/* Book 1 */}
        <div className="book-card">
          <img src="/images/fiction-book1.jpg" alt="Fiction Book 1" />
          <h3>The Great Gatsby</h3>
          <p>By F. Scott Fitzgerald</p>
        </div>

        {/* Book 2 */}
        <div className="book-card">
          <img src="/images/fiction-book2.jpg" alt="Fiction Book 2" />
          <h3>To Kill a Mockingbird</h3>
          <p>By Harper Lee</p>
        </div>

        {/* Book 3 */}
        <div className="book-card">
          <img src="/images/fiction-book3.jpg" alt="Fiction Book 3" />
          <h3>1984</h3>
          <p>By George Orwell</p>
        </div>

        {/* Book 4 */}
        <div className="book-card">
          <img src="/images/fiction-book4.jpg" alt="Fiction Book 4" />
          <h3>Harry Potter and the Sorcerer's Stone</h3>
          <p>By J.K. Rowling</p>
        </div>

        {/* Book 5 */}
        <div className="book-card">
          <img src="/images/fiction-book5.jpg" alt="Fiction Book 5" />
          <h3>The Hobbit</h3>
          <p>By J.R.R. Tolkien</p>
        </div>

        {/* Book 6 */}
        <div className="book-card">
          <img src="/images/fiction-book6.jpg" alt="Fiction Book 6" />
          <h3>Pride and Prejudice</h3>
          <p>By Jane Austen</p>
        </div>
      </div>
    </div>
  );
};

export default FictionPage;
