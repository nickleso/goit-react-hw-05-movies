import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchPopFilms } from 'MoviesAPI/fetchFilms';
import PopularMoviesList from './PopularFilmsList';

const PopularFilms = () => {
  const [popFilms, setPopFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function searchPopularFilms() {
      try {
        const films = await fetchPopFilms(1);

        setPopFilms(films.results);
      } catch (error) {
        console.log(error);
      }
    }

    searchPopularFilms();
  }, []);

  return (
    <>
      {popFilms.length > 0 && (
        <PopularMoviesList popFilms={popFilms} state={{ from: location }} />
      )}
    </>
  );
};

export default PopularFilms;
