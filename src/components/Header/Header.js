import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

const Header = ({ arrow }) => (
  <AppBar fixed flat>
    {arrow && (
      <button
        className="close-search"
        onClick={() => {
          window.history.back();
        }}
      >
        Close
      </button>
    )}
    <h1 style={{ textAlign: 'center', width: '100%' }}>MyReads</h1>
  </AppBar>
);

Header.defaultProps = {
  arrow: false,
};

Header.propTypes = {
  arrow: PropTypes.bool,
};

export default Header;
