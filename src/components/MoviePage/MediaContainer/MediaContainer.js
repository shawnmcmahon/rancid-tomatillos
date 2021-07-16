import React from "react"
import Trailer from '../../Trailer/Trailer.js';
import './MediaContainer.css'

const MediaContainer = ({ id, title, poster }) => {
  return (
    <section className="poster-trailers">
      <div className="image-container">
        <img src={poster}
          alt={title}
          className="single-poster"
          height="402px"
          width="268px" />
      </div>
        <Trailer id={id} />
    </section>
  )
}

export default MediaContainer
