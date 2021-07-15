const getAllMovies = () => {
  return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
    .then(checkResponse)
}

const getMovie = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(checkResponse)
}

const checkResponse = (response) => {
  if (response.ok) {
    return response.json()
  } else {
    const statusCode = response.status;
    throw new Error(`Request could not go through. Status code: ${statusCode}`)
  }
}

export { getAllMovies, getMovie }
