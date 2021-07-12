import React from "react"
import Trailer from '../Trailer/Trailer.js';
import "./MoviePage.css"
import Rating from '../Rating/Rating.js'
import { render } from "@testing-library/react";

class MoviePage extends React.Component {
  constructor() {
    super() 
      this.state = {
        id: this.props.movieID,
        info: null
      }
    
  
      
    };
    
    componentDidMount() {
      let url = 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/';
      let movieUrl = url + this.state.id
      fetch(movieUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({info: data})
      })
    }
    
    renderMovie = () => {
      const genres = this.props.genres.map(genre=> <div className="genre">{genre}</div>)
      const styles = {
      backgroundImage: `url(${this.props.backdrop})`
      }
      // const randomTrailer = this.props.trailers[Math.floor(Math.random() * this.props.trailers.length)]
    // const copy = {...randomTrailer}
    
    // console.log('this.props.trailers', this.props.trailers)
    
    const formatTime = () => {
      if (this.props.runtime > 60) {
        const time = {
          hours: (Math.floor(this.props.runtime / 60)),
          minutes: (this.props.runtime % 60)
        }
        return `${time.hours} hr ${time.minutes} min`
      }
      return `${this.props.runtime} min`
    }
    return 
    // (
    //   <div className="background-image" style={styles}>
    //     <div className="info-media">
    //       <div className="poster-trailers">
    //         <div className="image-container">
    //         <img src={this.props.poster}
    //           className="single-poster"
    //           height="402px"
    //           width="268px"/>
    //         </div>
    //           <Trailer
    //             // key={copy.key}
    //             id={this.props.id}
    //             title={this.props.title}
    //             trailers={this.props.trailers}
    //             />
    //       </div>
    //       <div className="movie-info">
    //         <h1>{this.props.title} <p className="year">({this.props.release.split('-')[0]})</p></h1>
    //         <Rating rating={this.props.rating} />
    //         <h2 className="tagline">{this.props.tagline}</h2>
    //         <p>{!this.props.overview ? "No overview available" : this.props.overview}</p>
    //         <div className="rating-runtime-genre">
    //           <div className="runtime-rating">
    //             <p className="runtime"><strong>{formatTime()}</strong></p>
    //           </div>
    //           <div className="genre-container">
    //             {genres}
    //           </div>
    //         </div>
    //         <button onClick={this.props.goBack}>Go Back</button>
    //       </div>
    //     </div>
    //   </div>
    // )
  };



render() {
    return (
      <section> 
        {
          this.state.info && this.renderMovie()
        } 
      </section>
    )
  } 
}

export default MoviePage
