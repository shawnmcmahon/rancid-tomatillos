import React from "react"
import "./MoviePage.css"

const MoviePage = (props) => {
  return (
    <div>
      <img className="backdrop" src={props.backdrop} alt={props.title} />
      <h1>{props.title}</h1>
      <h2>{props.tagline}</h2>
      <p>{!props.overview ? "No overview available" : props.overview}</p>
      <button onClick={props.goBack}>Go Back</button>
    </div>
  )
}

export default MoviePage
