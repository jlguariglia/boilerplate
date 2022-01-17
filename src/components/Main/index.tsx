import { Container, Logo, Title, Description, Illustration } from './styles';

const Main = ({
  title = 'Next App - Boilerplate',
  description = 'Boilerplate utilizing TypeScript, ReactJS, NextJS and Styled Components',
}) => (
  <Container>
    <Logo
      src="/img/logo.svg"
      alt="Atom and React Avancado written right next to it"
    />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="A software developer staring at a screen with some code on it"
    />
  </Container>
);

export default Main;
