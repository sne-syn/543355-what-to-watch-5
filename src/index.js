import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const moviePreview = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseYear: 2014
};

ReactDOM.render(
    <App moviePreview={moviePreview} />,
    document.querySelector(`#root`)
);
