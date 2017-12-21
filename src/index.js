/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import theme from 'assets/react-toolbox/theme.js';
import 'assets/react-toolbox/theme.css';
import App from './App';
import './index.css';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
