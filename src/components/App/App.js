import React from 'react';
import AllMovies from '../AllMovies/AllMovies';
// import Search from '../Search/Search'
import './App.css';
import movieData from '../../data/movieData';


class App extends React.Component {
  constructor()  {
    super()
      this.state = {
        movies: [],
        isLoading: true,
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



  render() {
    // const isShowingAllMovies = {this.state.isMainView ? this.renderAllMovies : this.renderMovie(id)} 

    return (
      <main className="App">
        <AllMovies movies={!this.state.isLoading ? this.state.movies : null}/> 
      </main>
    );
    
  }
}

// {!this.state.movies.movies && 
//   <h2> Loading Movies... </h2> 

// }
export default App;
