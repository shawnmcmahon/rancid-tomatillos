import React from 'react';
import Movie from '../Movie/Movie';
import './AllMovies.css'
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


class AllMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      isLoading: true
    }
  }

  componentDidMount = () => {
    const url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
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

  render() {
    const moviePosters = this.state.movies.map(movie => {
        return (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    rating={movie.average_rating}
                />
        )
    })

  return (

    <div>
      {this.state.isLoading && <h2 className="loading">Loading...</h2>}
      <div className='all-movies-container'>
        {moviePosters}
      </div>
    </div>
    )
  }

}

// const AllMovies = (props) => {
//     if (props.movies === null) {
//         return null
//     }
//     const moviePosters = props.movies.map(movie => {
//         return (
//                 <Movie
//                     key={movie.id}
//                     id={movie.id}
//                     poster={movie.poster_path}
//                     title={movie.title}
//                     rating={movie.average_rating}
//                 />
//         )
//     })
//
//
//
//     return (
//         <div className='all-movies-container'>
//             {moviePosters}
//         </div>
//     )
// }

export default AllMovies;

Movie.propTypes = {
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
}
