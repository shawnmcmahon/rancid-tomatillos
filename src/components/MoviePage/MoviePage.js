import React from "react"
import Trailer from '../Trailer/Trailer.js';
import "./MoviePage.css"

const MoviePage = (props) => {

  const styles = {
  backgroundImage: `url(${props.backdrop})`
};



  const genres = props.genres.map(genre=> <div className="genre">{genre}</div>)
  // const randomTrailer = props.trailers[Math.floor(Math.random() * props.trailers.length)]
  // const copy = {...randomTrailer}

  // console.log('props.trailers', props.trailers)

  const formatTime = () => {
    if (props.runtime > 60) {
      const time = {
        hours: (Math.floor(props.runtime / 60)),
        minutes: (props.runtime % 60)
      }
      return `${time.hours} hr ${time.minutes} min`
    }
    return `${props.runtime} min`
  }

  return (
    <div className="background-image" style={styles}>
      <div className="info-media">
        <div className="poster-trailers">
          <div className="image-container">
          <img src={props.poster}         className="single-poster"
          height="402px"
          width="268px"/>
          </div>
            <Trailer
              // key={copy.key}
              id={props.id}
              title={props.title}
              trailers={props.trailers}
            />
        </div>
        <div className="movie-info">
          <h1>{props.title} <p className="year">({props.release.split('-')[0]})</p></h1>
          <h2 className="tagline">{props.tagline}</h2>
          <p>{!props.overview ? "No overview available" : props.overview}</p>
          <div className="rating-runtime-genre">
            <div className="runtime-rating">
              <p className="runtime"><strong>{formatTime()}</strong></p>
            </div>
            <div className="genre-container">
              {genres}
            </div>
          </div>
          <button onClick={props.goBack}>Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default MoviePage
