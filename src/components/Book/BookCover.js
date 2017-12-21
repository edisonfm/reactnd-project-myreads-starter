import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookCover = ({ bookId, thumbnail }) => (
  <div>
    <Link to={`/detail/${bookId}`}>
      <div
        className="book-cover"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      />
    </Link>
  </div>
);

BookCover.propTypes = {
  bookId: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default BookCover;
