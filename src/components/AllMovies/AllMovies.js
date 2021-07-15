import React from 'react';
import Movie from '../Movie/Movie';
import './AllMovies.css'
// import { Link } from "react-router-dom";
import { getAllMovies } from '../../utilities/apiCalls'
import PropTypes from 'prop-types';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


class AllMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: false
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => this.setState({
      movies : data.movies.map(movie => {
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
    }))
    .catch(error => this.setState({error: true}))
  }

  render() {
    // const moviePosters = this.state.movies.map(movie => {
    //   return (
    //     <Movie
    //         key={movie.id}
    //         id={movie.id}
    //         poster={movie.poster_path}
    //         title={movie.title}
    //         rating={movie.average_rating}
    //     />
    //   )
    // })

  return (

    <div>
      {this.state.error && <ErrorComponent type="500" />}
      {!this.state.movies.length && <h2 className="loading">Loading...</h2>}
      <div className='all-movies-container'>
        {this.state.movies}
      </div>
    </div>
    )
  }

}

export default AllMovies;

Movie.propTypes = {
    id: PropTypes.number,
    poster: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.number,
}
