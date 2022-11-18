import axios from 'axios';
import { KEY, BASE_URL } from './key-url';

async function fetchFilmsByQuery(query) {
  const url = `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}`;

  // &page=${page}

  const { data } = await axios.get(url);

  return data;
}

export default fetchFilmsByQuery;
