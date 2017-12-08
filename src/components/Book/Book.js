import React from 'react';
import PropTypes from 'prop-types';
import SHELFS from 'constants/shelfs';

const Book = ({ book, onUpdateBook, loadingBook }) => (
  <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
          backgroundImage: `url(${book.imageLinks.thumbnail})`,
        }}
      >
        {loadingBook === book.id && <div>Carregando</div>}
      </div>
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

    {book.authors &&
      book.authors.forEach(author => (
        <div key={author} className="book-authors">
          {author}
        </div>
      ))}
  </div>
);

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired })
      .isRequired,
  }).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default Book;
