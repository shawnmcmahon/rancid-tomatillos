import React from 'react';
import Movie from '../Movie/Movie';
import './AllMovies.css'
// import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const AllMovies = (props) => {
    if (props.movies === null) {
        return null
    }
    const moviePosters = props.movies.map(movie => {
        return (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    rating={movie.average_rating}
                />
        )
    })



    return (
        <div className='all-movies-container'>
            {moviePosters}
        </div>
    )
}

export default AllMovies;

Movie.PropTypes = {
    key: PropTypes.number, 
    id: PropTypes.number, 
    poster: PropTypes.string, 
    title: PropTypes.string, 
    rating: PropTypes.number, 
}
