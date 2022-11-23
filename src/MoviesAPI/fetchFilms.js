import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const KEY = '3c2d3d1a4a9318a7ef02a0fdedccb03f';

export async function fetchPopFilms(page) {
  const url = `/trending/movie/day?api_key=${KEY}&page=${page}`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchFilmsById(movieId) {
  const url = `/movie/${movieId}?api_key=${KEY}`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchFilmsByQuery(query) {
  const url = `/search/movie?api_key=${KEY}&query=${query}`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchFilmsCredits(movieId) {
  const url = `/movie/${movieId}/credits?api_key=${KEY}`;

  const { data } = await axios.get(url);
  return data;
}

export async function fetchFilmsReviews(movieId) {
  const url = `/movie/${movieId}/reviews?api_key=${KEY}`;

  const { data } = await axios.get(url);
  return data;
}
