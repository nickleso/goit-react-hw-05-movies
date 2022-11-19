import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import fetchPopFilms from 'MoviesAPI/fetchPopularFilms';

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
      <ul>
        {popFilms.length > 0 &&
          popFilms.map(({ id, title, name }) => (
            <li key={id}>
              <Link to={`movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PopularFilms;
