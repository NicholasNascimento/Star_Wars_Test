import { GiLightSabers } from 'react-icons/gi';
import { Container, Content } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <GiLightSabers color="var(--yellow)" size="6rem" />
        <h1>Star Wars</h1>
      </Content>
      <Content>
        <button type="button">Buscar</button>
        <button type="button">Favoritos</button>
      </Content>
    </Container>
  )
}