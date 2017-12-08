import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Bookshelf from 'components/Bookshelf';
import SHELFS from 'constants/shelfs';
import { Button } from 'react-toolbox/lib/button';

const ListBooksPage = ({ books, onUpdateBook, loadingBook }) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <Button label="dsadas das as da" />
      <div>
        {SHELFS.map(shelf => {
          const booksOnShelf = books.filter(book => book.shelf === shelf.type);
          return (
            <Bookshelf
              key={shelf.type}
              title={shelf.title}
              books={booksOnShelf}
              onUpdateBook={onUpdateBook}
              loadingBook={loadingBook}
            />
          );
        })}
      </div>
    </div>
    <div className="open-search">
      <Link to="/search">Add a book</Link>
    </div>
  </div>
);

ListBooksPage.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUpdateBook: PropTypes.func.isRequired,
};

export default ListBooksPage;
