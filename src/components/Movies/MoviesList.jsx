import { useLocation } from 'react-router-dom';
import { StyledLink } from './Movies.styled';

const MoviesList = ({ visibleMovies }) => {
  const location = useLocation();
  return (
    <ul>
      {visibleMovies.map(({ id, title, name }) => (
        <li key={id}>
          <StyledLink to={`${id}`} state={{ from: location }}>
            {title || name}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
