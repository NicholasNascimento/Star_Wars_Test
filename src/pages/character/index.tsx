import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container, Content } from "./styles";


export function Character() {
  return (
    <>
      <Header />
      <Container>
        <Content>
        <button>
          <Link to="/favorites" style={{ textDecoration: 'none', color: 'white' }}>Favoritar</Link>
        </button>
          <p>Nome: Luke Skywalker</p>
          <p>Altura: 1,72</p>
          <p>Peso: 77 Kg</p>
          <p>Cor do cabelo: loiro</p>
          <p>Cor da pele: claro</p>
          <p>Cor dos olhos: Azul</p>
          <p>Sexo: Masculino</p>
        </Content>
      </Container>
    </>
  )
}