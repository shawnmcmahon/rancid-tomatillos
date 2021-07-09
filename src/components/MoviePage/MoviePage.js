import React from "react"
import "./MoviePage.css"

const MoviePage = (props) => {

  const styles = {
  backgroundImage: `url(${props.backdrop})`
};


// <img className="backdrop" src={props.backdrop} alt={props.title} />
  return (
    <div className="background-image" style={styles}>
      <div className="movie-info">
        <h1>{props.title}</h1>
        <h2>{props.tagline}</h2>
        <p>{!props.overview ? "No overview available" : props.overview}</p>
        <button onClick={props.goBack}>Go Back</button>
      </div>
    </div>
  )
}

export default MoviePage
