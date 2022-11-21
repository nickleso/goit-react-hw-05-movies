import { useSearchParams } from 'react-router-dom';
import { StyledButton, StyledForm, StyledInput } from './SerchBar.styled';
import { MdSavedSearch } from 'react-icons/md';

const SerchBar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const handleFilmChange = event => {
    const normilizedEventValue = event.target.value.toLowerCase();

    const nextName =
      normilizedEventValue !== '' ? { name: normilizedEventValue } : {};

    setSearchParams(nextName);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      return alert('Please, enter film name.');
    }

    onSubmit(name);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        name="film"
        value={name}
        autoComplete="off"
        autoFocus
        placeholder="Search films"
        onChange={handleFilmChange}
      />
      <StyledButton type="submit">
        <MdSavedSearch size={20} />
        Search
      </StyledButton>
    </StyledForm>
  );
};

export default SerchBar;
