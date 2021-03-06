import React from 'react';
import Rating from '../../Rating/Rating.js';
import { Link } from 'react-router-dom';
import './InfoContainer.css';

const InfoContainer = ({
  title,
  release,
  rating,
  tagline,
  overview,
  stylize,
  runtime,
  id,
}) => {
  return (
    <div key={id} className="movie-info">
      <h1>
        {title} <p className="year">({release.split('-')[0]})</p>
      </h1>
      <Rating rating={rating} />
      {tagline && <h2>{tagline}</h2>}
      <p className="overview">
        {!overview ? 'No overview available' : overview}
      </p>
      <div className="rating-runtime-genre">
        <div className="runtime-rating">
          <p className="runtime">
            <strong>{runtime}</strong>
          </p>
        </div>
        {stylize.length > 4 && <div className="genre-container">{stylize}</div>}

        {stylize.length === 4 && (
          <div className="medium-container">{stylize}</div>
        )}
        {stylize.length < 4 && (
          <div className="smaller-container">{stylize}</div>
        )}
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default InfoContainer;
