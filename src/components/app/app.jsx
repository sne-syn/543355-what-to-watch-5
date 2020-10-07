import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from "prop-types";
import MainPage from '../mainPage/mainPage';
import LoginPage from '../loginPage/loginPage';
import MyListPage from '../myListPage/myListPage';
import FilmPage from '../filmPage/filmPage';
import ReviewPage from '../reviewPage/reviewPage';
import PlayerPage from '../playerPage/playerPage';

const App = (props) => {
  const {moviePreview} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainPage moviePreview={moviePreview} />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/films/:id'>
          <FilmPage />
        </Route>
        <Route exact path='/films/:id/review'>
          <ReviewPage/>
        </Route>
        <Route exact path='/mylist'>
          <MyListPage />
        </Route>
        <Route exact path='/player/:id'>
          <PlayerPage/>
        </Route>
      </Switch>
    </BrowserRouter>
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
