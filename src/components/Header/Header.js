import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AppBar from 'react-toolbox/lib/app_bar/AppBar';

const Header = ({ arrow }) => (
  <AppBar fixed flat>
    {arrow && (
      <Link className="close-search" to="/">
        Close
      </Link>
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
