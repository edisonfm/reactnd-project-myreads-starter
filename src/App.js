import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBookPage from 'pages/SearchBooksPage';
import ListBooksPage from 'pages/ListBooksPage';
import DetailBookPage from 'pages/DetailBookPage';
import * as BooksAPI from 'api/BooksAPI';
import * as R from 'ramda';
import convertObjtToArray from 'utils';
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks: [],
      updatingBook: null,
      loadingBooks: true,
      draggableBook: null,
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books, loadingBooks: null });
    });
  }

  onUpdateBook = (book, shelf) => {
    const bookUpdated = { ...book };
    bookUpdated.shelf = shelf;

    this.setState({ updatingBook: book.id });

    BooksAPI.update(bookUpdated, shelf).then(() => {
      this.setState(prevState => ({
        books: prevState.books
          .filter(b => b.id !== bookUpdated.id)
          .concat([bookUpdated]),

        searchBooks: prevState.searchBooks.filter(b => b.id !== bookUpdated.id),

        updatingBook: null,
      }));
    });
  };

  onSearchBook = searchTerm => {
    if (searchTerm) {
      this.setState({ loadingBooks: true });

      BooksAPI.search(searchTerm).then(searchBooks => {
        const booksOnShelf = this.state.books.filter(searchBook =>
          searchBooks.find(
            stateBooks =>
              stateBooks.title === searchBook.title &&
              stateBooks.publishedDate === searchBook.publishedDate
          )
        );
        const mergedBooks = R.merge(searchBooks, booksOnShelf);
        this.setState(() => ({
          searchBooks: convertObjtToArray(mergedBooks),
          loadingBooks: null,
        }));
      });
    }
  };

  onDragStart = book => {
    this.setState(() => ({
      draggableBook: book,
    }));
  };

  render() {
    return (
      <div>
        <Route
          path="/"
          exact
          render={() => (
            <ListBooksPage
              books={this.state.books}
              updatingBook={this.state.updatingBook}
              loadingBooks={this.state.loadingBooks}
              draggableBook={this.state.draggableBook}
              onUpdateBook={this.onUpdateBook}
              onDragStart={this.onDragStart}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBookPage
              books={this.state.searchBooks}
              updatingBook={this.state.updatingBook}
              loadingBooks={this.state.loadingBooks}
              onUpdateBook={this.onUpdateBook}
              onSearchBook={this.onSearchBook}
            />
          )}
        />
        <Route
          path="/detail/:bookId"
          render={props => (
            <DetailBookPage
              {...props}
              updatingBook={this.state.updatingBook}
              onUpdateBook={this.onUpdateBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
