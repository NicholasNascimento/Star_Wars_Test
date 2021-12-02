import { Link } from 'react-router-dom';
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
        <button type="button">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Search</Link>
        </button>
        <button type="button">
          <Link to="/favorites" style={{ textDecoration: 'none', color: 'white' }}>Favorite List</Link>
        </button>
      </Content>
    </Container>
  )
}