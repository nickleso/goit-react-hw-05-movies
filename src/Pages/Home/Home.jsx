import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 16px;
`;

const Home = () => {
  return (
    <main>
      <Container>
        <h1>Trending today</h1>
        <ul></ul>
      </Container>
    </main>
  );
};

export default Home;
