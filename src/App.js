import React from 'react';
import { Route } from 'react-router-dom';
import SearchBook from './components/SearchBooks';
import ListBooks from './components/ListBooks';
// import * as BooksAPI from './api/BooksAPI'
import './App.css';

const BooksApp = () => (
  <div className="app">
    <Route path="/" exact component={ListBooks} />
    <Route path="/search" component={SearchBook} />
  </div>
);

export default BooksApp;
