import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Movies = () => {
  return (
    <main>
      <Container>
        <h1>Movies</h1>
      </Container>
    </main>
  );
};

export default Movies;
