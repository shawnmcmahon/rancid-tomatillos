import React from 'react';
import AllMovies from '../AllMovies/AllMovies';
// import Search from '../Search/Search'
import './App.css';
import movieData from '../../data/movieData';


class App extends React.Component {
  constructor()  {
    super()
      this.state = {
        movies: movieData
      }
  }



  render() {
    return (
      <main className="App">
        <AllMovies movies={this.state.movies}/> 
      </main>
    );

  }
}

export default App;
