import React from 'react';
import PropTypes from 'prop-types';
import SHELFS from 'constants/shelfs';
import { BookCover } from 'components/Book';

const Book = ({ book, loadingBook, onUpdateBook }) => (
  <div className="book">
    {loadingBook === book.id && <div>Carregando</div>}
    <div className="book-top">
      <BookCover bookId={book.id} thumbnail={book.imageLinks.thumbnail} />
      <div className="book-shelf-changer">
        <select
          onChange={e => onUpdateBook(book, e.target.value)}
          defaultValue={book.shelf}
        >
          <option value="none" disabled>
            Move to...
          </option>
          {SHELFS.map(shelf => (
            <option key={shelf.type} value={shelf.type}>
              {shelf.title}
            </option>
          ))}
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{book.title}</div>

    <div className="book-authors">
      {book.authors &&
        book.authors.map(author => <div key={author}>{author}</div>)}
    </div>
  </div>
);

Book.defaultProps = {
  loadingBook: null,
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired })
      .isRequired,
  }).isRequired,
  loadingBook: PropTypes.string,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Book;
