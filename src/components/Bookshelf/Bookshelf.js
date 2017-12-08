import React from 'react';
import PropTypes from 'prop-types';
import Book from '../Book';

const Bookshelf = ({
  title,
  books,
  loadingBook,
  onUpdateBook,
  onDragStart,
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              onUpdateBook={onUpdateBook}
              loadingBook={loadingBook}
              onDragStart={onDragStart}
            />
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Bookshelf.defaultProps = {
  loadingBook: null,
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingBook: PropTypes.string,
  onUpdateBook: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default Bookshelf;
