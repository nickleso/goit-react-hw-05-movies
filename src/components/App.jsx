import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../Pages/Home/Home';
import Movies from '../Pages/Movies/Movies';
import MovieDetails from 'Pages/Movies/MoviesDetails';
import NotFound from '../Pages/NotFound/NotFound';

export const App = () => {
  return (
    <>
      {/* <Layout /> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
