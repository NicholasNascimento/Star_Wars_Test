import { Header } from "../../components/Header";
import { Container, Content } from "./styles";

import { GiSpaceship } from 'react-icons/gi';

export function Home() {
  return (
    <>
      <Header />
      <Container>
        <Content>
          <div>
            <GiSpaceship color="var(--white)" size="14rem"/>
          </div>
          <input placeholder="Buscar personagem"/>
        </Content>
        <button>Buscar</button>
      </Container>
    </>
  )
}