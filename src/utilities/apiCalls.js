// Mock data for Netlify deployment
const mockMovies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster_path: "https://via.placeholder.com/300x450?text=Shawshank+Redemption",
    average_rating: 9.3,
    release_date: "1994-09-22"
  },
  {
    id: 2,
    title: "The Godfather",
    poster_path: "https://via.placeholder.com/300x450?text=The+Godfather",
    average_rating: 9.2,
    release_date: "1972-03-14"
  },
  {
    id: 3,
    title: "Pulp Fiction",
    poster_path: "https://via.placeholder.com/300x450?text=Pulp+Fiction",
    average_rating: 8.9,
    release_date: "1994-10-14"
  },
  {
    id: 4,
    title: "Fight Club",
    poster_path: "https://via.placeholder.com/300x450?text=Fight+Club",
    average_rating: 8.8,
    release_date: "1999-10-15"
  },
  {
    id: 5,
    title: "Inception",
    poster_path: "https://via.placeholder.com/300x450?text=Inception",
    average_rating: 8.8,
    release_date: "2010-07-16"
  }
];

const mockMovieDetails = {
  1: {
    id: 1,
    title: "The Shawshank Redemption",
    poster_path: "https://via.placeholder.com/300x450?text=Shawshank+Redemption",
    backdrop_path: "https://via.placeholder.com/1920x1080?text=Shawshank+Backdrop",
    average_rating: 9.3,
    release_date: "1994-09-22",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    genres: ["Drama"],
    budget: 25000000,
    revenue: 58800000,
    runtime: 142,
    tagline: "Fear can hold you prisoner. Hope can set you free."
  },
  2: {
    id: 2,
    title: "The Godfather",
    poster_path: "https://via.placeholder.com/300x450?text=The+Godfather",
    backdrop_path: "https://via.placeholder.com/1920x1080?text=Godfather+Backdrop",
    average_rating: 9.2,
    release_date: "1972-03-14",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    genres: ["Crime", "Drama"],
    budget: 6000000,
    revenue: 245066411,
    runtime: 175,
    tagline: "An offer you can't refuse."
  }
};

const getAllMovies = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return { movies: mockMovies };
};

const getMovie = async (id) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockMovieDetails[id] || mockMovieDetails[1];
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
