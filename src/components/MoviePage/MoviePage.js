import React from "react"
import Trailer from '../Trailer/Trailer.js';
import "./MoviePage.css"
import Rating from '../Rating/Rating.js'
import { render } from "@testing-library/react";
// import { Link } from "react-router-dom"
import { getMovie } from '../../utilities/apiCalls'
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import MediaContainer from "./MediaContainer/MediaContainer.js"
import InfoContainer from "./InfoContainer/InfoContainer.js"

class MoviePage extends React.Component {
  constructor({ movieID }) {
    super()
    this.state = {
      id: movieID,
      info: '',
      error: '',
    }
  };

  componentDidMount() {
    getMovie(this.state.id)
    .then(data => {
      this.setState({ info: data.movie})
    })
    .catch((error) => this.setState({ error: `${error}`}))
  }

  setGenreStyles = (movie) => {
    const genres = movie.genres.map(genre=> <div className="genre">{genre}</div>)
    const styles = {
      backgroundImage: `url(${movie.backdrop_path})`
    }

    return {
      g: genres,
      s: styles
    }
  }

  formatTime = (movie) => {
    if (movie.runtime > 60) {
      const time = {
        hours: (Math.floor(movie.runtime / 60)),
        minutes: (movie.runtime % 60)
      }
      return `${time.hours} hr ${time.minutes} min`
    }
    return `${movie.runtime} min`
  }

  render() {
    const { poster_path, id, title, average_rating, release_date, tagline, overview } = this.state.info || {}
    return (
      <section>
        {!this.state.info && !this.state.error && <h2 className="loading">Loading...</h2>}
        {!this.state.info && this.state.error && <ErrorComponent type="404" message={this.state.error}/>}
        {!this.state.error && this.state.info &&
          <div className="background-image" style={this.setGenreStyles(this.state.info).s}>
            <div className="info-media">
              <MediaContainer poster={poster_path} id={id} title={title} />
              <InfoContainer
                title={title}
                release={release_date}
                rating={average_rating}
                tagline={tagline}
                overview={overview}
                stylize={this.setGenreStyles(this.state.info).g}
                runtime={this.formatTime(this.state.info)}
              />
            </div>
          </div>
        }
      </section>
    )
  }
}

export default MoviePage
