import React from 'react';
import PropTypes from "prop-types";
import Main from '../main/main';

const App = (props) => {
  const {moviePreview} = props;
  return (
    <Main moviePreview={moviePreview} />
  );
};

App.propTypes = {
  moviePreview: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    releaseYear: PropTypes.number
  })
};

export default App;
