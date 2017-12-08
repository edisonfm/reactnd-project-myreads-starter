import React from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import { Link } from 'react-router-dom';
import Book from 'components/Book';

const SearchBooksPage = ({
  books,
  onUpdateBook,
  onSearchBook,
  loadingBook,
}) => (
  <div className="search-books">
    <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <Debounce time="400" handler="onChange">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={e => onSearchBook(e.target.value)}
          />
        </Debounce>
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
        {books &&
          books.map(book => (
            <li key={book.id}>
              <Book
                book={book}
                onUpdateBook={onUpdateBook}
                loadingBook={loadingBook}
              />
            </li>
          ))}
      </ol>
    </div>
  </div>
);

SearchBooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default SearchBooksPage;
