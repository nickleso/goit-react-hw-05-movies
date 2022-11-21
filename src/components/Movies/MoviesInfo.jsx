import { StyledDiv, StyledLink } from './Movies.styled';

const BASE_IMAGES_URL = 'https://image.tmdb.org/t/p/w400';

const MoviesInfo = ({ filmInfo, state }) => {
  const {
    poster_path,
    title,
    name,
    original_title,
    release_date,
    first_air_date,
    overview,
    vote_average,
    genres,
  } = filmInfo;

  return (
    <div style={{ paddingTop: 16 }}>
      <StyledDiv>
        <img
          width="200px"
          src={BASE_IMAGES_URL + poster_path}
          alt={title || name}
        />
        <div>
          <h2>
            {title || name || original_title || 'no info'}
            <span> {sliceFunction(release_date, first_air_date)}</span>
          </h2>
          <p>
            User Score: <span>{Math.ceil(vote_average * 10)}%</span>
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map(genre => genre.name).join(' ')}</p>
        </div>
      </StyledDiv>

      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <StyledLink to="cast" state={state}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={state}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

const sliceFunction = (release_date, first_air_date) => {
  if (!release_date && !first_air_date) {
    return '';
  }

  if (release_date) {
    return '(' + release_date.slice(0, 4) + ')';
  }

  return '(' + first_air_date.slice(0, 4) + ')';
};

export default MoviesInfo;
