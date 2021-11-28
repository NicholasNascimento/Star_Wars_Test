import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { useContext } from "react";
import { DataContext } from "../../DataContext";

import { Container, Content } from "./styles";
import { GiSpaceship } from 'react-icons/gi';


export function Home() {
  const {search, char} = useContext(DataContext);
 

  console.log(char);

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
        <button>
          <Link to="/character" style={{ textDecoration: 'none', color: 'white' }}>Buscar</Link>
        </button>
      </Container>
    </>
  )
}