import React from 'react';
import Movie from '../Movie/Movie';
import './AllMovies.css'
import { Link } from "react-router-dom";

const AllMovies = (props) => {
    if (props.movies === null) {
        return null
    }
    const moviePosters = props.movies.movies.map(movie => {
        return (
            <Link to={`/movie/${movie.id}`}>
                <Movie
                    key={movie.id}
                    id={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    rating={movie.average_rating}
                    showMovie={props.showMovie}
                />
            </Link>
        )
    })



    return (
        <div className='all-movies-container'>
            {moviePosters}
        </div>
    )
}

export default AllMovies;
