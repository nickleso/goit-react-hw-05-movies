import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetchFilmsCredits from 'MoviesAPI/fetchFilmsCredits';
// import * as defaultPicture from '../../images/film-default.jpg';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function searchFilmsById() {
      try {
        const filmCast = await fetchFilmsCredits(id);

        console.log(filmCast.cast);

        setCast(filmCast.cast);
      } catch (error) {
        console.log(error);
      }
    }

    searchFilmsById();
  }, [id, setCast]);

  if (!cast) {
    return null;
  }

  const imageFunction = profile_path => {
    if (profile_path) {
      return BASE_IMAGES_URL + profile_path;
    }

    // return defaultPicture;
  };

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          gap: 6,
          flexWrap: 'wrap',
          listStyle: 'none',
        }}
      >
        {cast.length > 0 &&
          cast.map(({ id, original_name, name, profile_path }) => (
            <li
              key={id}
              style={{
                width: 150,
              }}
            >
              <img
                width="150px"
                src={imageFunction(profile_path)}
                alt={name || original_name || 'no info'}
              />
              <h4>{name || original_name || 'no info'}</h4>
              {/* <p>play as: {character || 'no info'}</p> */}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cast;
