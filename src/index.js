import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const state = [
  { id: 1, title: 'title1', category: 'Horror' },
  { id: 2, title: 'title2', category: 'Horror' },
  { id: 3, title: 'title3', category: 'Horror' },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

export default state;
