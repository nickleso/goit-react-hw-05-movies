import axios from 'axios';
import { KEY, BASE_URL } from './key-url';

async function fetchFilmsReviews(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}`;

  const { data } = await axios.get(url);
  return data;
}

export default fetchFilmsReviews;
