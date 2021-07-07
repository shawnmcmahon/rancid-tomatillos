import React from 'react';
import './Movie.css';

const Movie = (props) => {
    return (
        <div>
            <img src={props.poster} className="movie"/>
            <h3>Rating: {props.rating.toFixed(1)}</h3>
        </div>
    )
}


export default Movie;



