const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://rancid-tomatillos.herokuapp.com' 
  : '';

const getAllMovies = () => {
  return fetch(`${API_BASE_URL}/api/v2/movies`).then(
    checkResponse
  );
};

const getMovie = (id) => {
  return fetch(
    `${API_BASE_URL}/api/v2/movies/${id}`
  ).then(checkResponse);
};

const getTrailers = (id) => {
  return fetch(
    `${API_BASE_URL}/api/v2/movies/${id}/videos/`
  ).then(checkResponse);
};

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(`Request could not go through.`);
  }
};

export { getAllMovies, getMovie, getTrailers };
