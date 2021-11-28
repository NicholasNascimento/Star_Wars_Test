import { useContext } from "react";
//import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Header } from "../../components/Header";
import { DataContext } from "../../DataContext";

import { Container, Content } from "./styles";
import { GiSpaceship } from 'react-icons/gi';

interface SearchCharacterProps {
  charName: string;
}

export function Home() {
  const { register, handleSubmit } = useForm();
  const { search, inputError, setInputError } = useContext(DataContext);

  async function handleActiveChar(data: SearchCharacterProps) {
    if(!inputError) {
      search(data.charName);
    } else {
      setInputError(false);
      search(data.charName);
    }
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(handleActiveChar)}>
          <Content>
            <div>
              <GiSpaceship color="var(--white)" size="14rem"/>
            </div>
            <input
              placeholder="Buscar personagem"
              {...register("charName", { required: true })}
              type="text"
            />
          </Content>
          <button type="submit">
            Buscar
          </button>
        </form>
      </Container>
    </>
  )
}