import { useContext } from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { DataContext } from "../../DataContext";

import { Container } from "./styles";

export function Favorites() {
  const { name } = useContext(DataContext);
  const favoritesList = [];

  favoritesList.push(...[name])

  return (
    <>
      <Header />
      <Container>
          {favoritesList.map(favorites => {
            return (
              <button key={name}>
                {(favorites !== '') && 
                  <Link to="/character" style={{ textDecoration: 'none', color: 'var(--yellow)' }}>
                    {favorites}
                  </Link>}
              </button>
            )
          })}
      </Container>
    </>
  )
}