import React from 'react';
import PropTypes from 'prop-types';

const BookInfo = ({ title, description }) => (
  <div>
    <small>{title}</small>

    <div style={{ fontSize: '14px', color: '#999', marginBottom: '10px' }}>
      {Array.isArray(description) ? (
        description.map(item => <div key={item}>{item}</div>)
      ) : (
        <div>{description}</div>
      )}
    </div>
  </div>
);

BookInfo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.any.isRequired,
};

export default BookInfo;
