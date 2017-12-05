import React from 'react';
import { Route } from 'react-router-dom';
import SearchBookPage from 'pages/SearchBooksPage';
import ListBooksPage from 'pages/ListBooksPage';
// import * as BooksAPI from './api/BooksAPI'
import './App.css';

const BooksApp = () => (
  <div className="app">
    <Route path="/" exact component={ListBooksPage} />
    <Route path="/search" component={SearchBookPage} />
  </div>
);

export default BooksApp;
