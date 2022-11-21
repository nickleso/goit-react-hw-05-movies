import { StyledLink } from './Movies.styled';

const MoviesList = ({ visibleMovies, state }) => {
  return (
    <ul>
      {visibleMovies.map(({ id, title, name }) => (
        <li key={id}>
          <StyledLink to={`${id}`} state={state}>
            {title || name}
          </StyledLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
