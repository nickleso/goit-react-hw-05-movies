import { StyledButton, StyledForm, StyledInput } from './SerchBar.styled';
import { MdSavedSearch } from 'react-icons/md';

const SerchBar = ({ onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledInput
        type="text"
        name="filmInput"
        autoComplete="off"
        autoFocus
        placeholder="Search films"
      />
      <StyledButton type="submit">
        <MdSavedSearch size={20} />
        Search
      </StyledButton>
    </StyledForm>
  );
};

export default SerchBar;
