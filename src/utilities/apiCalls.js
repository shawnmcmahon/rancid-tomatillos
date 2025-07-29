import movieData from '../data/movieData.js';

// Use the actual movie data from movieData.js
const { movies } = movieData;

// Create a map of movie details for individual movie lookups
const movieDetailsMap = movies.reduce((acc, movie) => {
  acc[movie.id] = {
    ...movie,
    overview: `A compelling story about ${movie.title}. This film showcases amazing performances and stunning visuals that will keep you on the edge of your seat.`,
    genres: ['Action', 'Drama', 'Thriller'], // Default genres
    budget: 50000000, // Default budget
    revenue: 100000000, // Default revenue
    runtime: 120, // Default runtime
    tagline: `Experience the magic of ${movie.title}`,
  };
  return acc;
}, {});

const getAllMovies = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return { movies };
};

const getMovie = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return movieDetailsMap[id] || movieDetailsMap[movies[0].id];
};

const getTrailers = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  return { 
    videos: [
      {
        id: 1,
        movie_id: id,
        key: "dQw4w9WgXcQ", // Rick Roll for demo
        site: "YouTube",
        type: "Trailer"
      }
    ] 
  };
};

export { getAllMovies, getMovie, getTrailers };
