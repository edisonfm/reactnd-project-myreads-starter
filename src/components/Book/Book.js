import React from 'react';
import PropTypes from 'prop-types';
import { BookCover, BookShelfCharger } from 'components/Book';
import { Card, CardMedia, CardText } from 'react-toolbox/lib/card';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';
import SHELFS from 'constants/shelfs';

const Book = ({ book, updatingBook, onUpdateBook, showBadge }) => (
  <div className="book">
    <Card>
      {updatingBook === book.id && (
        <span className="book-loading">
          <ProgressBar type="circular" multicolor />
        </span>
      )}
      {showBadge &&
        SHELFS.map(
          shelf =>
            shelf.type === book.shelf && (
              <span key={shelf.type} className={`book-badge ${shelf.type}`}>
                {shelf.title}
              </span>
            )
        )}
      <div className="book-top">
        <CardMedia>
          <BookCover bookId={book.id} thumbnail={book.imageLinks.thumbnail} />
        </CardMedia>
        <BookShelfCharger
          book={book}
          shelf={book.shelf}
          onUpdateBook={onUpdateBook}
        />
      </div>
      <div className="book-content">
        <h4 style={{ marginBottom: 0, width: '100%' }}>{book.title}</h4>
        <CardText>
          <small style={{ fontSize: '13px' }}>Authors:</small>
          <span style={{ color: '#757575' }}>
            {book.authors &&
              book.authors.map(author => <div key={author}>{author}</div>)}
          </span>
        </CardText>
      </div>
    </Card>
  </div>
);

Book.defaultProps = {
  updatingBook: null,
  showBadge: false,
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string),
    imageLinks: PropTypes.shape({ thumbnail: PropTypes.string.isRequired })
      .isRequired,
  }).isRequired,
  updatingBook: PropTypes.string,
  onUpdateBook: PropTypes.func.isRequired,
  showBadge: PropTypes.bool,
};

export default Book;
