import { useContext } from "react";
import { useForm } from "react-hook-form";

import { Header } from "../../components/Header";
import { DataContext } from "../../DataContext";

import { Container, Content } from "./styles";

interface FavoriteListProps {
  key: string;
  name: string;
}

export function Favorites() {
  const favoritesList: FavoriteListProps[] = JSON.parse(localStorage.getItem('name')!);
  const { search, inputError, setInputError } = useContext(DataContext);
  const { register } = useForm();

  async function handleMove(data: string) {
    if(!inputError) {
      search(data);
    } else {
      setInputError(false);
      search(data);
    }
  }

  return (
    <>
      <Header />
      <Content>
        <p>Favorite List:</p>
        <Container>
          {favoritesList.map(fav => {
            return (
              <ul key={fav.key}>
                <strong onClick={() => handleMove(fav.name)} {...register("charName", { required: true })}>{fav.name}</strong>
              </ul>
            )
          })}
        </Container>
      </Content>
    </>
  )
}