import React from 'react';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
import './AllMovies.css'
import { getAllMovies } from '../../utilities/apiCalls'
import PropTypes from 'prop-types';
import ErrorComponent from '../ErrorComponent/ErrorComponent';


class AllMovies extends React.Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
      rawData: []
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => this.setState({
      movies : this.renderPosters(data.movies), rawData : data.movies
    })
  )
  .catch(error => this.setState({error: 'Something went wrong!'}))
  }

  updateMoviesState = (searchResults) => {
    (!searchResults.length)
      ? this.setState({error: 'No movies matching search - please try another query'})
      : this.setState({ movies : this.renderPosters(searchResults), error: ''})
  }

  renderPosters = (movies) => {
    return movies.map(movie => {
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
  }

  render() {
    return (
      <div className="all-container">
        {!this.state.movies.length && this.state.error && <ErrorComponent type="500" />}
        {!this.state.rawData.length && <h2 className="loading">Loading...</h2>}
        {this.state.rawData.length ? <Search data={this.state.rawData} updateMovies={this.updateMoviesState} /> : null}
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.error &&
          <div className='all-movies-container'>
            {this.state.movies}
          </div>
        }
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
    rawData: PropTypes.array,
    updateMovies: PropTypes.func
}
