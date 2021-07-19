import React from "react"
import "./MoviePage.css"
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

  setGenreStyles = (movieGenres, backdrop) => {
    const genres = movieGenres.map((genre, index)=> {
      if (genre === "Science Fiction") {
        genre = "Sci-Fi"
      }
      return <div key={index} className="genre">{genre}</div>
    })
    const styles = {
      backgroundImage: `url(${backdrop})`
    }

    return {
      g: genres,
      s: styles
    }
  }

  formatTime = (runtime) => {
    if (runtime > 60) {
      const time = {
        hours: (Math.floor(runtime / 60)),
        minutes: (runtime % 60)
      }
      return `${time.hours} hr ${time.minutes} min`
    }
    return `${runtime} min`
  }

  render() {
    const { backdrop_path, poster_path, id, title, average_rating, release_date, tagline, overview, genres, runtime } = this.state.info || {}
    return (
      <section>
        {!this.state.info && !this.state.error ? <h2 className="loading">Loading...</h2> : null }
        {!this.state.info && this.state.error ? <ErrorComponent type="404" message={this.state.error}/> : null }
        {!this.state.error && this.state.info &&
          <div className="background-image" style={this.setGenreStyles(genres, backdrop_path).s}>
            <div className="info-media">
              <MediaContainer poster={poster_path} id={id} title={title} />
              <InfoContainer
                id={id}
                title={title}
                release={release_date}
                rating={average_rating}
                tagline={tagline}
                overview={overview}
                stylize={this.setGenreStyles(genres, backdrop_path).g}
                runtime={this.formatTime(runtime)}
              />
            </div>
          </div>
        }
      </section>
    )
  }
}

export default MoviePage
