import React from 'react';
import Movie from '../Movie/Movie';
import Search from '../Search/Search';
import './AllMovies.css';
import { getAllMovies } from '../../utilities/apiCalls';
import PropTypes from 'prop-types';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

class AllMovies extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: '',
      rawData: [],
    };
  }

  componentDidMount() {
    getAllMovies()
      .then((data) =>
        this.setState({
          movies: this.renderPosters(data.movies),
          rawData: data.movies,
        })
      )
      .catch((error) => this.setState({ error: 'Something went wrong!' }));
  }

  updateMoviesState = (searchResults) => {
    !searchResults.length
      ? this.setState({
          error: 'No movies matching search - please try another query',
        })
      : this.setState({ movies: this.renderPosters(searchResults), error: '' });
  };

  skeletonScreen = () => {
    return new Array(40).fill('placeholder').map((item, index) => (
      <div key={index} className="movie-loading">
        <br />
        <br />
      </div>
    ));
  };

  renderPosters = (movies) => {
    return movies.map((movie) => {
      return (
        <Movie
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          title={movie.title}
          rating={movie.average_rating}
        />
      );
    });
  };

  render() {
    return (
      <div className="all-container">
        {!this.state.movies.length && this.state.error && (
          <ErrorComponent type="500" />
        )}
        <Search
          data={this.state.rawData}
          updateMovies={this.updateMoviesState}
        />
        {!this.state.rawData.length && (
          <div className="all-movies-container">{this.skeletonScreen()}</div>
        )}
        {this.state.error && <h2>{this.state.error}</h2>}
        {!this.state.error && (
          <div className="all-movies-container">{this.state.movies}</div>
        )}
      </div>
    );
  }
}

export default AllMovies;

Movie.propTypes = {
  id: PropTypes.number,
  poster: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.number,
  rawData: PropTypes.array,
  updateMovies: PropTypes.func,
};
