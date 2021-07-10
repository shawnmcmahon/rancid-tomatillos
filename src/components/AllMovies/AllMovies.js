import React from 'react';
import PropTypes from 'prop-types';
import Movie from '../Movie/Movie';
import './AllMovies.css'

const AllMovies = (props) => {
    console.log('props', props)
    if (props.movies === null) {
        return null
    }
    const moviePosters = props.movies.movies.map(movie => {
        return (
            <Movie
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                rating={movie.average_rating}
                showMovie={props.showMovie}

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

Movie.propTypes = {
    movies: PropTypes.object, 
    showMovie: PropTypes.func
}

