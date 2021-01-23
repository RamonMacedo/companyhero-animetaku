import { Container, Logo } from './styles';

export default function Header({ children }) {
  return (
    <Container>
      <Logo src="https://i.ibb.co/3Tt063w/animetaku-logo2.png" />
      {children}
    </Container>
  )
}