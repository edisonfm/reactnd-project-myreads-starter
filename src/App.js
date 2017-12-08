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
      loadingBook: null,
      draggableBook: null,
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

        loadingBook: null,
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

  onDragStart = book => {
    this.setState(() => ({
      draggableBook: book,
    }));
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
              loadingBook={this.state.loadingBook}
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
              loadingBook={this.state.loadingBook}
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
