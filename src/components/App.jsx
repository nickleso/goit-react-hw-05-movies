import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movies/Movies';
import MovieDetails from 'Pages/Movies/MoviesDetails';
import Cast from 'Pages/Movies/Cast';
import Reviews from 'Pages/Movies/Reviews';
import NotFound from '../Pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
