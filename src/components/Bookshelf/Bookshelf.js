import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'components/DragAndDrop';
import Book from '../Book';

const Bookshelf = ({
  title,
  books,
  updatingBook,
  onUpdateBook,
  onDragStart,
}) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">
      {title} ({books.length})
    </h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map(book => (
          <li key={book.id}>
            <Draggable element={book} onDragStart={onDragStart}>
              <Book
                book={book}
                onUpdateBook={onUpdateBook}
                updatingBook={updatingBook}
              />
            </Draggable>
          </li>
        ))}
      </ol>
    </div>
  </div>
);

Bookshelf.defaultProps = {
  updatingBook: null,
};

Bookshelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatingBook: PropTypes.string,
  onUpdateBook: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default Bookshelf;
