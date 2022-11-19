import axios from 'axios';
import { KEY, BASE_URL } from './key-url';

async function fetchFilmsById(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;

  // &page=${page}

  const { data } = await axios.get(url);
  return data;
}

export default fetchFilmsById;
