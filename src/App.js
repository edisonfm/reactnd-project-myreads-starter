import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBookPage from 'pages/SearchBooksPage';
import ListBooksPage from 'pages/ListBooksPage';
import * as BooksAPI from 'api/BooksAPI';
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchBooks: [],
      loadingBook: false,
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  onUpdateBook = (book, shelf) => {
    const bookUpdated = { ...book };
    bookUpdated.shelf = shelf;

    this.setState({ loadingBook: book.id });

    BooksAPI.update(bookUpdated, shelf).then(() => {
      this.setState(prevState => ({
        books: prevState.books
          .filter(b => b.id !== bookUpdated.id)
          .concat([bookUpdated]),

        searchBooks: prevState.searchBooks.filter(b => b.id !== bookUpdated.id),

        loadingBook: false,
      }));
    });
  };

  onSearchBook = searchTerm => {
    if (searchTerm) {
      BooksAPI.search(searchTerm).then(books => {
        this.setState(() => ({
          searchBooks: books,
        }));
      });
    }
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => (
            <ListBooksPage
              books={this.state.books}
              onUpdateBook={this.onUpdateBook}
              loadingBook={this.state.loadingBook}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBookPage
              books={this.state.searchBooks}
              onUpdateBook={this.onUpdateBook}
              onSearchBook={this.onSearchBook}
              loadingBook={this.state.loadingBook}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
