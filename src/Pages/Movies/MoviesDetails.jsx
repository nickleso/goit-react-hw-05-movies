import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import fetchFilmsById from 'MoviesAPI/fetchFilmsById';
import { BiLeftArrowCircle } from 'react-icons/bi';
import MoviesInfo from 'components/Movies/MoviesInfo';
import { BackLink } from 'components/Movies/Movies.styled';

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
      <BackLink to={backLinkHref}>
        <BiLeftArrowCircle size={20} />
        Go back
      </BackLink>

      <MoviesInfo filmInfo={filmInfo} state={{ from: location }} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  );
};

export default MovieDetails;
