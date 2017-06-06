import React from 'react';
import ReactDOM from 'react-dom';
import MovieBox from './components/MovieBox'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app');
  ReactDOM.render(<MovieBox/>, targetDiv);
});
