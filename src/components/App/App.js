import React from 'react';
import AllMovies from '../AllMovies/AllMovies';
import MoviePage from '../MoviePage/MoviePage';
// import Search from '../Search/Search'
import './App.css';
import movieData from '../../data/movieData';


class App extends React.Component {
  constructor()  {
    super()
      this.state = {
        movies: [],
        isLoading: true,
        currentMovie: {}
      }
  }

  componentDidMount = () => {
    console.log("WORKING?????")
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/'
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({movies : data, isLoading : false}))
    .catch(error => console.log('Something went wrong', error))

    // setTimeout(this.setState( { movies : movieData }), 10000);
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

  renderMoviePage() {
    return (
      <MoviePage
        title={this.state.currentMovie.movie.title}
        overview={this.state.currentMovie.movie.overview}
        backdrop={this.state.currentMovie.movie.backdrop_path}

      />
    )
  }

  render() {
    const isShowingAllMovies = {!this.state.currentMovie.movie ? this.renderAllMovies() : this.renderMoviePage()}



    return (
      this.renderAllMovies()
    )


  // backdrop_path
  // overview
  // title
  // tagline

    // return (
    //   <main className="App">
    //     <AllMovies
    //       movies={!this.state.isLoading ? this.state.movies : null}
    //       showMovie={this.showMovie}
    //
    //     />
    //   </main>
    // );

  }
}

// {!this.state.movies.movies &&
//   <h2> Loading Movies... </h2>

// }
export default App;
