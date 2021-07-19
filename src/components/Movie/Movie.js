import React from 'react';
import Rating from '../Rating/Rating.js';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ title, id, poster, rating }) => {
  return (
    <div>
      <Link name={title} to={`${id}`}>
        <img src={poster} className="movie" id={id} alt={title} />
      </Link>
      <Rating rating={rating} />
    </div>
  );
};

export default Movie;
