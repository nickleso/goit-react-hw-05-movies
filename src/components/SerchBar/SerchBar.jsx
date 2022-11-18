import { useState } from 'react';

const SerchBar = ({ onSubmit }) => {
  const [searchFilm, setSearchFilm] = useState('');

  const handleFilmChange = event => {
    setSearchFilm(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchFilm.trim() === '') {
      return alert('Please, enter film name.');
    }

    onSubmit(searchFilm);

    setSearchFilm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="film"
        value={searchFilm}
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={handleFilmChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SerchBar;
