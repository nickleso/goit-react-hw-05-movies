import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import fetchFilmsById from 'MoviesAPI/fetchFilmsById';
import { BiLeftArrowCircle } from 'react-icons/bi';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';

const MovieDetails = () => {
  const { id } = useParams();
  const [filmInfo, setFilmInfo] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

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
      <Link
        to={backLinkHref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          border: '1px solid blue',
          borderColor: 'blue',
          borderRadius: 5,
          width: 100,
          height: 40,
          color: 'blue',
        }}
      >
        <BiLeftArrowCircle size={20} />
        Go back
      </Link>
      <div
        style={{
          paddingTop: 16,
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
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
