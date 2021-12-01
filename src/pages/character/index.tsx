import { useContext } from "react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { DataContext } from "../../DataContext";

import { Container, Content } from "./styles";

export function Character() {
  const { name, totalPeople, totalPlanets,/* films, totalSpecies, totalVehicles, totalStarships*/ } = useContext(DataContext);

  return (
    <>
      <Header />
      <Container>
        <Content>
        <button>
          <Link to="/favorites" style={{ textDecoration: 'none', color: 'white' }}>Favoritar</Link>
        </button>
        <ul>
          {totalPeople.map(character => {
            {if (character.name === name) {
              return (
                <ul key={character.name}>
                  <p>Name: <strong>{character.name}</strong></p>
                  <p>Height: <strong>{character.height}</strong></p>
                  <p>Mass: <strong>{character.mass}</strong></p>
                  <p>Hair color: <strong>{character.hair_color}</strong></p>
                  <p>Skin color: <strong>{character.skin_color}</strong></p>
                  <p>Eye color: <strong>{character.eye_color}</strong></p>
                  <p>Birth year: <strong>{character.birth_year}</strong></p>
                  <p>Gender: <strong>{character.gender}</strong></p>
                  <p>Homeworld: {totalPlanets.map(planets => {
                    {if (character.homeworld === planets.url) {
                      return (
                        <strong key={planets.name}>{planets.name}</strong>
                      )
                    }}
                  })}</p>
                  <p>Films: {character.films}</p>
                  <p>Species: {character.species}</p>
                  <p>Vehicles: {character.vehicles}</p>
                  <p>Starships: {character.starships}</p>
                </ul>
              )
            }}
          })}

          {totalPlanets.map(planets => {
            {if (planets.name === name) {
              return (
                <ul key={planets.name}>
                  <p>Name: <strong>{planets.name}</strong></p>
                  <p>Height: <strong>{planets.rotation_period}</strong></p>
                  <p>Mass: <strong>{planets.orbital_period}</strong></p>
                  <p>Hair color: <strong>{planets.diameter}</strong></p>
                  <p>Skin color: <strong>{planets.climate}</strong></p>
                  <p>Eye color: <strong>{planets.gravity}</strong></p>
                  <p>Birth year: <strong>{planets.terrain}</strong></p>
                  <p>Gender: <strong>{planets.surface_water}</strong></p>
                  <p>Population: <strong>{planets.population}</strong></p>
                  <p>Residents: {planets.films}</p>
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