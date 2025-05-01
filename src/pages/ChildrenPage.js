import React from 'react';
import './NonFictionPage.css'; // Reuse the same CSS for consistent styling

const ChildrensPage = () => {
  return (
    <div className="non-fiction-page">
      <h2>Children's Books</h2>
      <p>Delight the little ones with stories of adventure, imagination, and fun.</p>
      <div className="book-list">
        {/* Book 1 */}
        <div className="book-card">
          <img src="/images/children-book1.jpg" alt="Children's Book 1" />
          <h3>The Very Hungry Caterpillar</h3>
          <p>By Eric Carle</p>
        </div>

        {/* Book 2 */}
        <div className="book-card">
          <img src="/images/children-book2.jpg" alt="Children's Book 2" />
          <h3>Where the Wild Things Are</h3>
          <p>By Maurice Sendak</p>
        </div>

        {/* Book 3 */}
        <div className="book-card">
          <img src="/images/children-book3.jpg" alt="Children's Book 3" />
          <h3>Charlotte's Web</h3>
          <p>By E.B. White</p>
        </div>

        {/* Book 4 */}
        <div className="book-card">
          <img src="/images/children-book4.jpg" alt="Children's Book 4" />
          <h3>Matilda</h3>
          <p>By Roald Dahl</p>
        </div>

        {/* Book 5 */}
        <div className="book-card">
          <img src="/images/children-book5.jpg" alt="Children's Book 5" />
          <h3>Green Eggs and Ham</h3>
          <p>By Dr. Seuss</p>
        </div>

        {/* Book 6 */}
        <div className="book-card">
          <img src="/images/children-book6.jpg" alt="Children's Book 6" />
          <h3>Goodnight Moon</h3>
          <p>By Margaret Wise Brown</p>
        </div>
      </div>
    </div>
  );
};

export default ChildrensPage;
