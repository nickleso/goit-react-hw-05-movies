import { Link } from 'react-router-dom';

const MoviesList = ({ visibleMovies, state }) => {
  return (
    <ul>
      {visibleMovies.map(({ id, title, name }) => (
        <li key={id}>
          <Link
            to={`${id}`}
            state={state}
            style={{
              color: '#058bf8',
            }}
          >
            {title || name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
