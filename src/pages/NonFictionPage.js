import React from 'react';
import './NonFictionPage.css'; // Import CSS file

const NonFictionPage = () => {
  return (
    <div className="non-fiction-page">
      <h2>Non-Fiction Books</h2>
      <p>Explore the real world through biographies, history, self-help, and more.</p>
      <div className="book-list">
        {/* Row 1 */}
        <div className="book-card">
          <img src="/images/nonfiction-book1.jpg" alt="Book 1" />
          <h3>The Power of Habit</h3>
          <p>By Charles Duhigg</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book2.jpg" alt="Book 2" />
          <h3>Educated</h3>
          <p>By Tara Westover</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book3.jpg" alt="Book 3" />
          <h3>Becoming</h3>
          <p>By Michelle Obama</p>
        </div>

        {/* Row 2 */}
        <div className="book-card">
          <img src="/images/nonfiction-book4.jpg" alt="Book 4" />
          <h3>Atomic Habits</h3>
          <p>By James Clear</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book5.jpg" alt="Book 5" />
          <h3>Thinking, Fast and Slow</h3>
          <p>By Daniel Kahneman</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book6.jpg" alt="Book 6" />
          <h3>Sapiens</h3>
          <p>By Yuval Noah Harari</p>
        </div>

        {/* Row 3 (New Row) */}
        <div className="book-card">
          <img src="/images/nonfiction-book7.jpg" alt="Book 7" />
          <h3>The Subtle Art of Not Giving a F*ck</h3>
          <p>By Mark Manson</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book8.jpg" alt="Book 8" />
          <h3>Outliers</h3>
          <p>By Malcolm Gladwell</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book9.jpg" alt="Book 9" />
          <h3>Man's Search for Meaning</h3>
          <p>By Viktor E. Frankl</p>
        </div>

        {/* Row 4 (New Row) */}
        <div className="book-card">
          <img src="/images/nonfiction-book10.jpg" alt="Book 10" />
          <h3>Grit</h3>
          <p>By Angela Duckworth</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book11.jpg" alt="Book 11" />
          <h3>Quiet</h3>
          <p>By Susan Cain</p>
        </div>
        <div className="book-card">
          <img src="/images/nonfiction-book12.jpg" alt="Book 12" />
          <h3>Deep Work</h3>
          <p>By Cal Newport</p>
        </div>
      </div>
    </div>
  );
};

export default NonFictionPage;
