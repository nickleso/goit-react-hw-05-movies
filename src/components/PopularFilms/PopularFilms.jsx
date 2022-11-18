import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import fetchPopFilms from 'MoviesAPI/fetchPopularFilms';

const PopularFilms = () => {
  const [popFilms, setPopFilms] = useState([]);

  useEffect(() => {
    async function searchPopularFilms() {
      try {
        const films = await fetchPopFilms(1);
        console.log(films.results);

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
              <Link to={`${id}`}>{title || name}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PopularFilms;
