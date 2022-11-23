import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmsCredits } from 'MoviesAPI/fetchFilms';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function searchFilmsById() {
      try {
        const filmCast = await fetchFilmsCredits(id);

        setCast(filmCast.cast);
      } catch (error) {
        console.log(error);
      }
    }

    searchFilmsById();
  }, [id]);

  return (
    <div>
      {cast.length < 1 && <p>No information about the cast for this movie.</p>}

      {cast.length > 0 && (
        <ul
          style={{
            display: 'flex',
            gap: 6,
            flexWrap: 'wrap',
            listStyle: 'none',
          }}
        >
          {cast.map(({ id, original_name, name, profile_path }) => (
            <li
              key={id}
              style={{
                width: 150,
              }}
            >
              <img
                width="150px"
                src={
                  profile_path
                    ? BASE_IMAGES_URL + profile_path
                    : 'https://dummyimage.com/200x300/bab8ba/000&text=no+photo'
                }
                alt={name || original_name || 'no info'}
              />
              <h4>{name || original_name || 'no info'}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cast;
