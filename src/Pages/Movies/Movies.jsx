import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import SerchBar from 'components/SerchBar/SerchBar';
import fetchFilmsByQuery from 'MoviesAPI/fetchFilmsByQuery';
import MoviesList from 'components/Movies/MoviesList';

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

  const visibleMovies = useMemo(() => {
    return filmsByQ.filter(film => film.title.toLowerCase().includes(filmName));
  }, [filmsByQ, filmName]);

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

      {visibleMovies.length > 0 && (
        <MoviesList visibleMovies={visibleMovies} state={{ from: location }} />
      )}
    </main>
  );
};

export default Movies;
