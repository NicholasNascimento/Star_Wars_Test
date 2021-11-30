import { useContext } from "react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";
import { DataContext } from "../../DataContext";
import { Container, Content } from "./styles";

export function Character() {
  const { name, people, /*planets, films, species, vehicles, starships*/ } = useContext(DataContext);

  console.log(people);

  return (
    <>
      <Header />
      <Container>
        <Content>
        <button>
          <Link to="/favorites" style={{ textDecoration: 'none', color: 'white' }}>Favoritar</Link>
        </button>
        <ul>
          {people.map(character => {
            {if (character.name === name) {
              return (
                <ul key={character.name}>
                  <p>Name: {character.name}</p>
                  <p>Height: {character.height}</p>
                  <p>Mass: {character.mass}</p>
                  <p>Hair color: {character.hair_color}</p>
                  <p>Skin color: {character.skin_color}</p>
                  <p>Eye color: {character.eye_color}</p>
                  <p>Birth year: {character.birth_year}</p>
                  <p>Gender: {character.gender}</p>
                  <p>Homeworld: {character.homeworld}</p>
                  <p>Films: {character.films}</p>
                  <p>Species: {character.species}</p>
                  <p>Vehicles: {character.vehicles}</p>
                  <p>Starships: {character.starships}</p>
                </ul>
              )
            }}
          })}
        </ul>
        
        </Content>
      </Container>
    </>
  )
}