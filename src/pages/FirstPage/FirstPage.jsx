import { Container, Title, StyledImage } from './FirstPageStyled';
import example from 'assets/example.png';

const FirstPage = () => {
  return (
    <Container>
      <Title>First Page</Title>
      <StyledImage src={example} alt="Example" />
    </Container>
  );
};

export default FirstPage;
