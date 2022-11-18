import axios from 'axios';
import { KEY, BASE_URL } from './key-url';

async function fetchPopFilms(page) {
  const url = `${BASE_URL}/trending/movie/day?api_key=${KEY}&page=${page}`;
  const { data } = await axios.get(url);

  return data;
}

export default fetchPopFilms;
