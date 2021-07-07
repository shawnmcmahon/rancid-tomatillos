import React from 'react';
import Movie from '../Movie/Movie';

const AllMovies = (props) => {

    const moviePosters = props.movies.map(movie => {
        return (
            <Movie
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                
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