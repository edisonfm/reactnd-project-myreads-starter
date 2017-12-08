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

    BooksAPI.update(bookUpdated, shelf).then(() => {
      this.setState(prevState => ({
        books: prevState.books
          .filter(b => b.id !== bookUpdated.id)
          .concat([bookUpdated]),
      }));
    });
  };

  onSearchBook = searchTerm => {
    if (searchTerm) {
      BooksAPI.search(searchTerm).then(books => {
        console.log(books);
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
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
