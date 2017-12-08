import React from 'react';
import PropTypes from 'prop-types';

const Draggable = ({ children, element, onDragStart }) => (
  <div draggable onDragStart={() => onDragStart(element)}>
    {children}
  </div>
);

Draggable.propTypes = {
  children: PropTypes.element.isRequired,
  element: PropTypes.objectOf(PropTypes.any).isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default Draggable;
