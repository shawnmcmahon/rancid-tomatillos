import React from 'react';
import AllMovies from '../AllMovies/AllMovies';
import MoviePage from '../MoviePage/MoviePage';
// import Search from '../Search/Search'
import './App.css';
// import movieData from '../../data/movieData';


class App extends React.Component {
  constructor()  {
    super()
      this.state = {
        movies: [],
        isLoading: true,
        currentMovie: "",
        test: true,
        error: false
      }
  }

  componentDidMount = () => {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
    const url2 = 'https://httpstat.us/500'
    fetch(url)
    .then(this.checkForError)
    .then(data => this.setState({movies : data, isLoading : false}))
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
    fetch(url + id)
      .then(response => response.json())
      .then(data => this.setState({currentMovie: data}))
  }

  renderAllMovies = () => {
    return (
      <main className="App">
        <AllMovies
          movies={!this.state.isLoading ? this.state.movies : null}
          showMovie={this.showMovie}

        />
      </main>
    );
  }

  backToMain = () => {
    this.setState({currentMovie: ""})
  }

  renderMoviePage() {
    return (
      <MoviePage
        title={this.state.currentMovie.movie.title}
        overview={this.state.currentMovie.movie.overview}
        tagline={this.state.currentMovie.movie.tagline}
        backdrop={this.state.currentMovie.movie.backdrop_path}
        genres={this.state.currentMovie.movie.genres}
        goBack={this.backToMain}
      />
    )
  }

  render() {
    return (
      <div>
        {
          this.state.error && <h1>Server is experience error, please try again later.</h1>
        }

        {!this.state.currentMovie ? this.renderAllMovies() : this.renderMoviePage()}
      </div>
    )
  }
}

// {!this.state.movies.movies &&
//   <h2> Loading Movies... </h2>

// }
export default App;
