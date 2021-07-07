import React from "react"

const MoviePage = (props) => {
  return (
    <div>
      <img src={props.backdrop} />
      <h1>{props.title}</h1>
      <h2>{props.overiew}</h2>
    </div>
  )
}

export default MoviePage
