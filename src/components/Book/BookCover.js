import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookCover = ({ bookId, thumbnail }) => (
  <div>
    <Link to={`/detail/${bookId}`}>
      <div
        className="book-cover"
        style={{
          width: 128,
          height: 193,
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
