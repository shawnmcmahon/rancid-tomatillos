import React from 'react';
import './Movie.css';
import Rating from '../Rating/Rating.js'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Movie extends React.Component {
    handleClick = () => {
        this.props.showMovie(this.props.id)
    }

    render() {
        // const rating = Math.floor((this.props.rating.toFixed(1) / 2))
        // const stars = new Array(rating).fill(<FontAwesomeIcon icon="star" className="checked" />)
        // const remainder = new Array(5 - rating).fill(<FontAwesomeIcon icon="star" />)
        // const allStars = stars.concat(remainder)

        // let stars = start.map(star => <FontAwesomeIcon icon="star" />)
        // console.log("RATING", rating, "STARS", stars)
        return (
            <div onClick={this.handleClick}>
                <img src={this.props.poster} className="movie" id={this.props.id} alt={this.props.title} />
                <Rating rating={this.props.rating} />
            </div>
        )

    }
}

// <h3>Rating: {this.props.rating.toFixed(1)}</h3>
//
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star checked"></span>
// <span class="fa fa-star"></span>
// <span class="fa fa-star"></span>


export default Movie;
