import React from 'react';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
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
      error: false, 
      rawData: []
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
      }), rawData : data.movies
    })
  )
  .catch(error => this.setState({error: true}))
  }

  render() {
    return (
      <div className="all-container">
        {this.state.error && <ErrorComponent type="500" />}
        {!this.state.movies.length && <h2 className="loading">Loading...</h2>}
        <Search rawData={this.state.rawData}/>
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
    rawData: PropTypes.array
}
