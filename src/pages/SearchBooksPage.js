import React from 'react';
import PropTypes from 'prop-types';
import { Debounce } from 'react-throttle';
import Book from 'components/Book';
import Header from 'components/Header';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';

const SearchBooksPage = ({
  books,
  updatingBook,
  loadingBooks,
  onUpdateBook,
  onSearchBook,
}) => (
  <div>
    <Header arrow />
    {loadingBooks ? (
      <ProgressBar multicolor />
    ) : (
      <div className="search-books">
        <div className="search-books-bar">
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
            {books.error ? (
              <p>
                Books not found, try another{' '}
                <a
                  href="https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  term
                </a>
              </p>
            ) : (
              books.map(book => (
                <li key={book.id}>
                  <Book
                    book={book}
                    onUpdateBook={onUpdateBook}
                    updatingBook={updatingBook}
                    showBadge
                  />
                </li>
              ))
            )}
          </ol>
        </div>
      </div>
    )}
  </div>
);

SearchBooksPage.defaultProps = {
  updatingBook: null,
  loadingBooks: null,
};

SearchBooksPage.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  updatingBook: PropTypes.string,
  loadingBooks: PropTypes.string,
  onUpdateBook: PropTypes.func.isRequired,
  onSearchBook: PropTypes.func.isRequired,
};

export default SearchBooksPage;
