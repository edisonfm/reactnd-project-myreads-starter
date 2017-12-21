import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from 'components/Bookshelf';
import SHELFS from 'constants/shelfs';
import { DropZone } from 'components/DragAndDrop';
import Header from 'components/Header';

const ListBooksPage = ({
  books,
  loadingBook,
  draggableBook,
  onUpdateBook,
  onDragStart,
}) => (
  <div>
    <Header />
    <div className="list-books">
      <div className="list-books-content">
        <div>
          {SHELFS.map(shelf => {
            const booksOnShelf = books.filter(
              book => book.shelf === shelf.type
            );
            console.log(booksOnShelf);

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
                    loadingBook={loadingBook}
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
  </div>
);

ListBooksPage.defaultProps = {
  loadingBook: null,
  draggableBook: null,
};

ListBooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadingBook: PropTypes.string,
  draggableBook: PropTypes.objectOf(PropTypes.any),
  onUpdateBook: PropTypes.func.isRequired,
  onDragStart: PropTypes.func.isRequired,
};

export default ListBooksPage;
