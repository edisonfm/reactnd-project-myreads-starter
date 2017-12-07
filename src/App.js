import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SearchBookPage from 'pages/SearchBooksPage';
import ListBooksPage from 'pages/ListBooksPage';
import * as BooksAPI from './api/BooksAPI';
import './App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() => <ListBooksPage books={this.state.books} />}
        />
        <Route path="/search" component={SearchBookPage} />
      </div>
    );
  }
}

export default BooksApp;
