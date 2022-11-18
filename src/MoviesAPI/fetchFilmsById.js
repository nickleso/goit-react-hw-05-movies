import axios from 'axios';
import { KEY, BASE_URL } from './key-url';

async function fetchFilmsById(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${KEY}`;

  // &page=${page}

  console.log(url);
  const { data } = await axios.get(url);

  console.log(data);

  return data;
}

export default fetchFilmsById;
