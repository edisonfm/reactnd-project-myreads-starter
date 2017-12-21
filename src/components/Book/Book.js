import React from 'react';
import PropTypes from 'prop-types';
import { BookCover, BookShelfCharger } from 'components/Book';
import { Card, CardMedia, CardText } from 'react-toolbox/lib/card';

const Book = ({ book, loadingBook, onUpdateBook }) => (
  <div className="book">
    <Card>
      {loadingBook === book.id && <div>Carregando</div>}
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
