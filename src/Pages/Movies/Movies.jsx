import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import SerchBar from 'components/SerchBar/SerchBar';
import fetchFilmsByQuery from 'MoviesAPI/fetchFilmsByQuery';
import MoviesList from 'components/Movies/MoviesList';

const Movies = () => {
  const [filmsByQ, setFilmsByQ] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get('name') ?? '';
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

  const handleFormSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const normilizedValue = form.elements.filmInput.value.toLowerCase();

    if (normilizedValue.trim() === '') {
      return alert('Please, enter film name.');
    }

    const searchName =
      normilizedValue !== '' ? { name: normilizedValue.trim() } : {};

    setSearchParams(searchName);
  };

  return (
    <main>
      <SerchBar onSubmit={handleFormSubmit} />

      {visibleMovies && (
        <MoviesList visibleMovies={visibleMovies} state={{ from: location }} />
      )}
    </main>
  );
};

export default Movies;
