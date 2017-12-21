import React from 'react';
import PropTypes from 'prop-types';
import SHELFS from 'constants/shelfs';

const BookShelfCharger = ({ book, shelf, onUpdateBook }) => {
  console.log('book', book);
  return (
    <div className="book-shelf-changer">
      <select
        onChange={e => onUpdateBook(book, e.target.value)}
        defaultValue={shelf}
      >
        <option value="none" disabled>
          Move to...
        </option>
        {SHELFS.map(bookShelf => (
          <option key={bookShelf.type} value={bookShelf.type}>
            {bookShelf.title}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookShelfCharger.propTypes = {
  book: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default BookShelfCharger;
