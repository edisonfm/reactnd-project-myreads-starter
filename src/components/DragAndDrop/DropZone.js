import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropZone extends Component {
  constructor() {
    super();
    this.state = {
      hightlight: null,
    };
  }

  // onDragEnter = () => {
  //   this.setState({
  //     hightlight: { backgroundColor: 'red' },
  //   });
  // };

  onDragLeave = () => {
    this.setState({
      hightlight: null,
    });
  };

  onDragOver = e => {
    e.preventDefault();
    this.setState({
      hightlight: { border: '6px dashed green' },
    });
  };

  render() {
    const { children, draggableBook, shelf, onUpdateBook } = this.props;
    return (
      <div
        style={this.state.hightlight}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={() => {
          onUpdateBook(draggableBook, shelf);
          this.onDragLeave();
        }}
      >
        {children}
      </div>
    );
  }
}

DropZone.defaultProps = {
  draggableBook: null,
};

DropZone.propTypes = {
  children: PropTypes.element.isRequired,
  draggableBook: PropTypes.objectOf(PropTypes.any),
  shelf: PropTypes.string.isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default DropZone;
