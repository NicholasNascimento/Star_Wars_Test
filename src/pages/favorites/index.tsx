import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";

export function Favorites() {
  return (
    <>
      <Header />
      <Container>
          <button>
            <Link to="/character" style={{ textDecoration: 'none', color: 'var(--yellow)' }}>Luke Skywalker</Link>
          </button>
          <button>
            <Link to="/character" style={{ textDecoration: 'none', color: 'var(--yellow)' }}>C-3PO</Link>
          </button>
          <button>
            <Link to="/character" style={{ textDecoration: 'none', color: 'var(--yellow)' }}>R2-D2</Link>
          </button>
          <button>
            <Link to="/character" style={{ textDecoration: 'none', color: 'var(--yellow)' }}>Darth Vader</Link>
          </button>
          <button>
            <Link to="/character" style={{ textDecoration: 'none', color: 'var(--yellow)' }}>Leia Organa</Link>
          </button>
      </Container>
    </>
  )
}