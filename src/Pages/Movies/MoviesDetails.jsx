import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import fetchFilmsById from 'MoviesAPI/fetchFilmsById';
import { BiLeftArrowCircle } from 'react-icons/bi';
import MoviesInfo from 'components/Movies/MoviesInfo';

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

  return (
    <main>
      <Link
        to={backLinkHref}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          border: '1px solid blue',
          borderColor: '#1a7ac8',
          borderRadius: 5,
          width: 100,
          height: 40,
          color: '#1a7ac8',
        }}
      >
        <BiLeftArrowCircle size={20} />
        Go back
      </Link>

      <MoviesInfo filmInfo={filmInfo} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
