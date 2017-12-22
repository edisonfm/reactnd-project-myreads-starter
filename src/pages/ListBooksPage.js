import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from 'components/Bookshelf';
import SHELFS from 'constants/shelfs';
import { DropZone } from 'components/DragAndDrop';
import Header from 'components/Header';
import { ProgressBar } from 'react-toolbox/lib/progress_bar';

const ListBooksPage = ({
  books,
  updatingBook,
  loadingBooks,
  draggableBook,
  onUpdateBook,
  onDragStart,
}) => (
  <div>
    <Header />
    {loadingBooks ? (
      <ProgressBar multicolor />
    ) : (
      <div className="list-books">
        <div className="list-books-content">
          <div>
            {SHELFS.map(shelf => {
              const booksOnShelf = books.filter(
                book => book.shelf === shelf.type
              );
              return (
                <DropZone
                  key={shelf.type}
                  draggableBook={draggableBook}
                  shelf={shelf.type}
                  onUpdateBook={onUpdateBook}
                >
                  <div>
                    <Bookshelf
                      title={shelf.title}
                      books={booksOnShelf}
                      updatingBook={updatingBook}
                      onUpdateBook={onUpdateBook}
                      onDragStart={onDragStart}
                    />
                  </div>
                </DropZone>
              );
            })}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )}
  </div>
);

ListBooksPage.defaultProps = {
  updatingBook: null,
  loadingBooks: null,
  draggableBook: null,
};

ListBooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  updatingBook: PropTypes.string,
  loadingBooks: PropTypes.string,
  draggableBook: PropTypes.objectOf(PropTypes.any),
  onUpdateBook: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default ListBooksPage;
