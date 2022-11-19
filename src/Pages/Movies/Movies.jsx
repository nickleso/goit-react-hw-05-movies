import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SerchBar from 'components/SerchBar/SerchBar';
import fetchFilmsByQuery from 'MoviesAPI/fetchFilmsByQuery';

const Movies = () => {
  const [filmName, setFilmName] = useState('');
  const [filmsByQ, setFilmsByQ] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (!filmName) {
      return;
    }

    async function fetchFilms() {
      try {
        const films = await fetchFilmsByQuery(filmName);

        if (films.results.length < 1) {
          return alert('No Films on your query');
        }

        setFilmsByQ(films.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetchFilms();
  }, [filmName]);

  const handleFormSubmit = searchFilm => {
    if (searchFilm === filmName) {
      return;
    }

    setFilmName(searchFilm);
    setFilmsByQ([]);
  };

  return (
    <main>
      <SerchBar onSubmit={handleFormSubmit} />
      <ul>
        {filmsByQ.length > 0 &&
          filmsByQ.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Movies;
