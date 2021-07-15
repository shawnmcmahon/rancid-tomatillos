import React from "react"
import Trailer from '../../Trailer/Trailer.js';

const MediaContainer = ({ id, title, poster }) => {
  return (
    <section className="poster-trailers">
      <div className="image-container">
        <img src={poster}
          className="single-poster"
          height="402px"
          width="268px" />
      </div>
        <Trailer id={id} title={title} />
    </section>
  )
}

export default MediaContainer
