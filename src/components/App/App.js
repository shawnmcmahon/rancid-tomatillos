import React from 'react';
import AllMovies from '../AllMovies/AllMovies';
import MoviePage from '../MoviePage/MoviePage';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {
        Switch,
        Route,
      } from "react-router-dom";
import PropTypes from 'prop-types';
import './App.css';
library.add(faStar)

const App = () => {

  return (
    <main>
      <header><h1>Rancid Tomatillos</h1></header>
      <Switch>
        <Route
          exact path="/"
          component={AllMovies}
        />
        <Route
            path="/:id/:invalidPath" render={() => {
            return <ErrorComponent type="404" />
          }}
        />
        <Route
          path="/:id" render={({ match }) => {
            const { id } = match.params
            const regex = new RegExp('/d')
            if (regex.test(id.toString())) {
              return <ErrorComponent type="404" />
            }
            return <MoviePage movieID={id} className="all-movies" />
          }}
        />
      </Switch>
    </main>
  )
}

export default App;

MoviePage.propTypes = {
  movieID: PropTypes.string,
}
