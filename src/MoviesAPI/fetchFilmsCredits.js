import axios from 'axios';
import { KEY, BASE_URL } from './key-url';

async function fetchFilmsCredits(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}`;

  console.log(url);
  const { data } = await axios.get(url);

  console.log(data);

  return data;
}

export default fetchFilmsCredits;
