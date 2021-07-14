import React from 'react';
import AllMovies from '../AllMovies/AllMovies';
import MoviePage from '../MoviePage/MoviePage';
import ErrorComponent from '../ErrorComponent/ErrorComponent';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import {
        Switch,
        Route,
        Redirect,
      } from "react-router-dom";

// import Search from '../Search/Search'
import './App.css';
library.add(faStar)
// import movieData from '../../data/movieData';


class App extends React.Component {
  constructor()  {
    super()
      this.state = {
        movies: [],
        isLoading: true,
        currentMovie: "",
        currentTrailers: "",
        test: true,
        error: false
      }
  }

  componentDidMount = () => {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
    const url2 = 'https://httpstat.us/500'
    fetch(url)
    .then(this.checkForError)
    .then(data => this.setState({movies : data.movies, isLoading : false}))
    .catch(error => console.log('Something went wrong:', error))
  }

  checkForError = (response) => {
    console.log(response)
    if (!response.ok) {
      const statusCode = response.status;
      this.setState({ error: true});
      throw new Error(`Something went wrong, please try again. Error Code: ${statusCode}`)
    } else {
      return response.json()
    }
  }

  showMovie = (id) => {
    console.log('id', id)
    let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
    let movieUrl = url + id
    fetch(movieUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({currentMovie: data})
      })
  }

  renderAllMovies = () => {
    return (
      <main className="App">
        {this.state.isLoading && <h2 className="loading">Loading...</h2>}
        <AllMovies
          movies={!this.state.isLoading ? this.state.movies : null}
          showMovie={this.showMovie}

        />
      </main>
    );
  }

  backToMain = () => {
    this.setState({currentMovie: "", currentTrailers: ""})
  }

  renderMoviePage() {
    return (
      <MoviePage
        className="all-movies"
        id={this.state.currentMovie.movie.id}
        title={this.state.currentMovie.movie.title}
        overview={this.state.currentMovie.movie.overview}
        tagline={this.state.currentMovie.movie.tagline}
        backdrop={this.state.currentMovie.movie.backdrop_path}
        genres={this.state.currentMovie.movie.genres}
        runtime={this.state.currentMovie.movie.runtime}
        rating={this.state.currentMovie.movie.average_rating}
        goBack={this.backToMain}
        release={this.state.currentMovie.movie.release_date}
        trailers={this.state.currentTrailers}
        poster={this.state.currentMovie.movie.poster_path}
      />
    )
  }

  render() {
    return (
      <main>
        <header><h1>Rancid Tomatillos</h1></header><br />
        <Switch>
          <Route exact path="/" render={() =>  this.renderAllMovies()}
            />
          <Route
            path="/:id" render={({ match }) => {
              const { id } = match.params
              if (!this.state.movies.length) {
                return (
                  <div>
                    <h2 className="loading">Loading...</h2>
                  </div>
                )
              }
              else {
                const found = this.state.movies.find(movie => movie.id === parseInt(id))
                if (found) {
                  return <MoviePage movieID={id} className="all-movies" />
                }
                return <ErrorComponent />
              }
            }}
            />
          // <Route path="*" component={ErrorComponent} />
        </Switch>
      </main>
        )
      }
    }
    {/* <div>
      {!this.state.currentMovie ? this.renderAllMovies() : this.renderMoviePage()}
    </div> */}

// {
//   this.state.error && <h1>Server is experience error, please try again later.</h1>
// }
// {!this.state.movies.movies &&
//   <h2> Loading Movies... </h2>

// }
export default App;
