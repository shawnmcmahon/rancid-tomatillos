import React from 'react';
import Movie from '../Movie/Movie';

const AllMovies = (props) => {
    console.log('props.movies', props.movies)
    const moviePosters = props.movies.movies.map(movie => {
        return (
            <Movie
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