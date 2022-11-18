import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilmsById from 'MoviesAPI/fetchFilmsById';
// import styled from 'styled-components';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';

const MovieDetails = () => {
  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);

  useEffect(() => {
    async function searchFilmsById() {
      try {
        const film = await fetchFilmsById(id);

        setFilmInfo(film);
      } catch (error) {
        console.log(error);
      }
    }

    searchFilmsById();
  }, [id, setFilmInfo]);

  if (!filmInfo) {
    return null;
  }

  const sliceFunction = (release_date, first_air_date) => {
    if (!release_date && !first_air_date) {
      return '';
    }

    if (release_date) {
      return '(' + release_date.slice(0, 4) + ')';
    }

    return '(' + first_air_date.slice(0, 4) + ')';
  };

  const {
    poster_path,
    title,
    name,
    original_title,
    release_date,
    first_air_date,
    overview,
    vote_average,
    genres,
  } = filmInfo;

  return (
    <main>
      <button type="button">Go back</button>
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <img
          width="200px"
          src={BASE_IMAGES_URL + poster_path}
          alt={title || name}
        />
        <div>
          <h2>
            {title || name || original_title || 'no info'}
            <span> {sliceFunction(release_date, first_air_date)}</span>
          </h2>
          <p>
            User Score: <span>{Math.ceil(vote_average * 10)}%</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <p>Cast</p>
          </li>
          <li>
            <p>Revievs</p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MovieDetails;
