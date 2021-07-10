import React from "react"
import "./MoviePage.css"

const MoviePage = (props) => {

  const styles = {
  backgroundImage: `url(${props.backdrop})`
};



  const genres = props.genres.map(genre=> <div className="genre">{genre}</div>)
  const randomTrailer = props.trailers[Math.floor(Math.random() * props.trailers.length)]
  const copy = {...randomTrailer}

// <img className="backdrop" src={props.backdrop} alt={props.title} />
  return (
    <div className="background-image" style={styles}>
    <iframe
        width="560"
        src={"http://www.youtube.com/embed/" + copy.key}
        height="315"
        title={props.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
      <div className="movie-info">
        <h1>{props.title}</h1>
        <h2>{props.tagline}</h2>
        <p>{!props.overview ? "No overview available" : props.overview}</p>
        <div className="runtime-rating">
          <p>Runtime: {props.runtime} min</p>
          <p>Average Rating: {props.rating.toFixed(1)}</p>
        </div>
        <div className="genre-container">
          {genres}
        </div>
        <button onClick={props.goBack}>Go Back</button>
      </div>
    </div>
  )
}

export default MoviePage
