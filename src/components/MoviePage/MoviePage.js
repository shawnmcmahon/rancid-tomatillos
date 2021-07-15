import React from "react"
import Trailer from '../Trailer/Trailer.js';
import "./MoviePage.css"
import Rating from '../Rating/Rating.js'
import { render } from "@testing-library/react";
import { Link } from "react-router-dom"
import { getMovie } from '../../utilities/apiCalls'
import ErrorComponent from "../ErrorComponent/ErrorComponent";

class MoviePage extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        id: props.movieID,
        info: undefined,
        isLoading: true,
        error: "",
        valid: []
      }
    };

    componentDidMount() {
      getMovie(this.state.id)
      .then(data => {
        console.log(data)
        this.setState({ info: data.movie, isLoading: false })
        console.log(this.state)
      })
      .catch((error) => this.setState({ error: `${error}`, isLoading: false }))
    }

    setGenreStyles = (movie) => {
      if (!movie.genres) {
        return
      }
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
      if (!movie.runtime) {
        return
      }
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
  return (
    <section>
      {this.state.isLoading && !this.state.error && <h2 className="loading">Loading...</h2>}
      {!this.state.isLoading && this.state.error && <ErrorComponent type="404" message={this.state.error}/>}
      {!this.state.isLoading && !this.state.error && this.state.info &&
        <div className="background-image" style={this.setGenreStyles(this.state.info).s}>
          <div className="info-media">
            <div className="poster-trailers">
              <div className="image-container">
              <img src={this.state.info.poster_path}
                className="single-poster"
                height="402px"
                width="268px"/>
              </div>
                <Trailer
                  id={this.state.info.id}
                  title={this.state.info.title}
                  />
            </div>
            <div className="movie-info">
              <h1>{this.state.info.title} <p className="year">({this.state.info.release_date.split('-')[0]})</p></h1>
              <Rating rating={this.state.info.average_rating} />
              {
                this.state.info.tagline && <h2 className="tagline">{this.state.info.tagline}</h2>
              }
              <p>{!this.state.info.overview ? "No overview available" : this.state.info.overview}</p>
              <div className="rating-runtime-genre">
                <div className="runtime-rating">
                  <p className="runtime"><strong>{this.formatTime(this.state.info)}</strong></p>
                </div>
                <div className="genre-container">
                  {this.setGenreStyles(this.state.info).g}
                </div>
              </div>
              <Link to="/">
                <button>Go Back</button>
              </Link>
            </div>
          </div>
        </div>

      }
    </section>
  )
  }
}

export default MoviePage
