import React from "react"
import Rating from '../../Rating/Rating.js';
import { Link } from "react-router-dom"
import './InfoContainer.css'

const InfoContainer = ({ title, release, rating, tagline, overview, stylize, runtime }) => {
  return (
    <div className="movie-info">
      <h1>{title} <p className="year">({release.split('-')[0]})</p></h1>
      <Rating rating={rating} />
      {tagline && <h2>{tagline}</h2>}
      <p>{!overview ? "No overview available" : overview}</p>
      <div className="rating-runtime-genre">
        <div className="runtime-rating">
          <p className="runtime"><strong>{runtime}</strong></p>
        </div>
        <div className="genre-container">
          {stylize}
        </div>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  )
}

export default InfoContainer
