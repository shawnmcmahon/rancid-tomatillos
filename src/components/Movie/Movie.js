import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends React.Component {
  handleClick = () => {
    this.props.showMovie(this.props.id);
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <img
          src={this.props.poster}
          className="movie"
          id={this.props.id}
          alt={this.props.title}
        />
        <h3>Rating: {this.props.rating.toFixed(1)}</h3>
      </div>
    );
  }
}

export default Movie;

Movie.propTypes = {
  src: PropTypes.string,
  id: PropTypes.number,
  alt: PropTypes.string,
};
