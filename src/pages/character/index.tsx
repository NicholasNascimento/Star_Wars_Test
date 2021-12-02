import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { DataContext } from "../../DataContext";

import * as S from "./styles";

export function Character() {
  const { search, inputError, setInputError, name, totalPeople, totalPlanets, films, totalSpecies, totalVehicles, totalStarships } = useContext(DataContext);
  const { register } = useForm();
  const person = totalPeople.find(pers => pers.name === name);
  const planet = totalPlanets.find(plan => plan.name === name);
  const film = films.find(film => film.title === name);
  const specie = totalSpecies.find(spec => spec.name === name);
  const vehicle = totalVehicles.find(vehi => vehi.name === name);
  const starship = totalStarships.find(star => star.name === name);

  const peoplePlanets = totalPlanets.filter(plan => person?.homeworld.includes(plan.url));
  const peopleFilms = films.filter(film => person?.films.includes(film.url));
  const peopleSpecies = totalSpecies.filter(spec => person?.species.includes(spec.url));
  const peopleVehicles = totalVehicles.filter(vehi => person?.vehicles.includes(vehi.url));
  const peopleStarships = totalStarships.filter(star => person?.starships.includes(star.url));

  const planetsResidents = totalPeople.filter(resi => planet?.residents.includes(resi.url));
  const planetsFilms = films.filter(film => planet?.films.includes(film.url));

  const filmCharacters = totalPeople.filter(pers => film?.characters.includes(pers.url));
  const filmPlanets = totalPlanets.filter(plan => film?.planets.includes(plan.url));
  const filmStarships = totalStarships.filter(star => film?.starships.includes(star.url));
  const filmVehicles = totalVehicles.filter(vehi => film?.vehicles.includes(vehi.url));
  const filmSpecies = totalSpecies.filter(spec => film?.species.includes(spec.url));

  const speciePlanets = totalPlanets.filter(plan => specie?.homeworld.includes(plan.url));
  const specieCharacters = totalPeople.filter(peop => specie?.people.includes(peop.url));
  const specieFilms = films.filter(film => specie?.films.includes(film.url));

  const vehiclePilots = totalPeople.filter(pilot => vehicle?.pilots.includes(pilot.url));
  const vehicleFilms = films.filter(film => vehicle?.films.includes(film.url));

  const starshipPilots = totalPeople.filter(pilot => starship?.pilots.includes(pilot.url));
  const starshipFilms = films.filter(film => starship?.films.includes(film.url));

  console.log(planet);
  

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
      <S.Container>
        <S.Content>
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
                  <p>Homeworld: {peoplePlanets.map(planetChar => (
                      <strong onClick={() => handleMove(planetChar.name)} {...register("charName", { required: true })}>{planetChar.name}</strong>
                  ))}</p>
                  <p>Films: {peopleFilms.map(filmsChar => (
                    <ul>
                      <strong onClick={() => handleMove(filmsChar.title)} {...register("charName", { required: true })}>{filmsChar.title}</strong>
                    </ul>
                  ))}</p>
                  <p>Species: {peopleSpecies.map(speciesChar => (
                    <ul>
                      <strong onClick={() => handleMove(speciesChar.name)} {...register("charName", { required: true })}>{speciesChar.name}</strong>
                    </ul>
                  ))}</p>
                  <p>Vehicles: {peopleVehicles.map(vehiclesChar => (
                    <ul>
                      <strong onClick={() => handleMove(vehiclesChar.name)} {...register("charName", { required: true })}>{vehiclesChar.name}</strong>
                    </ul>
                  ))}</p>
                  <p>Starships: {peopleStarships.map(starshipsChar => (
                    <ul>
                      <strong onClick={() => handleMove(starshipsChar.name)} {...register("charName", { required: true })}>{starshipsChar.name}</strong>
                    </ul>
                  ))}</p>
                </ul>
              )
            }}
          })}

          {totalPlanets.map(planets => {
            {if (planets.name === name) {
              return (
                <ul key={planets.name}>
                  <p>Name: <strong>{planets.name}</strong></p>
                  <p>Rotation Period: <strong>{planets.rotation_period}</strong></p>
                  <p>Orbital Period: <strong>{planets.orbital_period}</strong></p>
                  <p>Diameter: <strong>{planets.diameter}</strong></p>
                  <p>Climate: <strong>{planets.climate}</strong></p>
                  <p>Gravity: <strong>{planets.gravity}</strong></p>
                  <p>Terrain: <strong>{planets.terrain}</strong></p>
                  <p>Population: <strong>{planets.population}</strong></p>
                  <p>Residents: {planetsResidents.map(planetResid => (
                    <ul>
                      <strong onClick={() => handleMove(planetResid.name)} {...register("charName", { required: true })}>{planetResid.name}</strong>
                    </ul>
                  ))}</p>
                  <p>Films: {planetsFilms.map(planetFilms => (
                    <ul>
                      <strong onClick={() => handleMove(planetFilms.title)} {...register("charName", { required: true })}>{planetFilms.title}</strong>
                    </ul>
                  ))}</p>
                </ul>
              )
            }}
          })}

          {films.map(films => {
            {if (films.title === name) {
              return (
                <ul key={films.episode_id}>
                  <p>Name: <strong>{films.title}</strong></p>
                  <p>Director: <strong>{films.director}</strong></p>
                  <p>Producer: <strong>{films.producer}</strong></p>
                  <p>Characters: <strong>{filmCharacters.map(filmCharac => (
                    <ul>
                      <strong onClick={() => handleMove(filmCharac.name)} {...register("charName", { required: true })}>{filmCharac.name}</strong>
                    </ul>
                  ))}</strong></p>
                  <p>Planets: <strong>{filmPlanets.map(filmPlan => (
                    <ul>
                      <strong onClick={() => handleMove(filmPlan.name)} {...register("charName", { required: true })}>{filmPlan.name}</strong>
                    </ul>
                  ))}</strong></p>
                  <p>Starships: <strong>{filmStarships.map(filmStar => (
                    <ul>
                      <strong onClick={() => handleMove(filmStar.name)} {...register("charName", { required: true })}>{filmStar.name}</strong>
                    </ul>
                  ))}</strong></p>
                  <p>Vehicles: <strong>{filmVehicles.map(filmVehic => (
                    <ul>
                      <strong onClick={() => handleMove(filmVehic.name)} {...register("charName", { required: true })}>{filmVehic.name}</strong>
                    </ul>
                  ))}</strong></p>
                  <p>Species: <strong>{filmSpecies.map(filmSpec => (
                    <ul>
                      <strong onClick={() => handleMove(filmSpec.name)} {...register("charName", { required: true })}>{filmSpec.name}</strong>
                    </ul>
                  ))}</strong></p>
                </ul>
              )
            }}
          })}

          {totalSpecies.map(species => {
            {if (species.name === name) {
              return (
                <ul key={species.name}>
                  <p>Name: <strong>{species.name}</strong></p>
                  <p>Classification: <strong>{species.classification}</strong></p>
                  <p>Designation: <strong>{species.designation}</strong></p>
                  <p>Average Height: <strong>{species.average_height}</strong></p>
                  <p>Skin colors: <strong>{species.skin_colors}</strong></p>
                  <p>Hair colors: <strong>{species.hair_colors}</strong></p>
                  <p>Eye colors: <strong>{species.eye_colors}</strong></p>
                  <p>Language: <strong>{species.language}</strong></p>
                  <p>Homeworld: {speciePlanets.map(speciePlan => (
                    <ul>
                      <strong onClick={() => handleMove(speciePlan.name)} {...register("charName", { required: true })}>{speciePlan.name}</strong>
                    </ul>
                  ))}</p>
                  <p>People: <strong>{specieCharacters.map(specieChar => (
                    <ul>
                      <strong onClick={() => handleMove(specieChar.name)} {...register("charName", { required: true })}>{specieChar.name}</strong>
                    </ul>
                  ))}</strong></p>
                  <p>Films: <strong>{specieFilms.map(specieFilm => (
                    <ul>
                      <strong onClick={() => handleMove(specieFilm.title)} {...register("charName", { required: true })}>{specieFilm.title}</strong>
                    </ul>
                  ))}</strong></p>
                </ul>
              )
            }}
          })}

          {totalVehicles.map(vehicles => {
            {if (vehicles.name === name) {
              return (
                <ul key={vehicles.name}>
                  <p>Name: <strong>{vehicles.name}</strong></p>
                  <p>Model: <strong>{vehicles.model}</strong></p>
                  <p>Manufacturer: <strong>{vehicles.manufacturer}</strong></p>
                  <p>cost_in_credits: <strong>{vehicles.cost_in_credits}</strong></p>
                  <p>Length: <strong>{vehicles.length}</strong></p>
                  <p>Passengers: <strong>{vehicles.passengers}</strong></p>
                  <p>Vehicle class: <strong>{vehicles.vehicle_class}</strong></p>
                  <p>Pilots: <strong>{vehiclePilots.map(vehiclePilots => (
                    <ul>
                      <strong onClick={() => handleMove(vehiclePilots.name)} {...register("charName", { required: true })}>{vehiclePilots.name}</strong>
                    </ul>
                  ))}</strong></p>
                  <p>Films: <strong>{vehicleFilms.map(vehicleFilms => (
                    <ul>
                      <strong onClick={() => handleMove(vehicleFilms.title)} {...register("charName", { required: true })}>{vehicleFilms.title}</strong>
                    </ul>
                  ))}</strong></p>
                </ul>
              )
            }}
          })}

          {totalStarships.map(starships => {
            {if (starships.name === name) {
              return (
                <ul key={starships.name}>
                  <p>Name: <strong>{starships.name}</strong></p>
                  <p>Model: <strong>{starships.model}</strong></p>
                  <p>Manufacturer: <strong>{starships.manufacturer}</strong></p>
                  <p>cost_in_credits: <strong>{starships.cost_in_credits}</strong></p>
                  <p>Length: <strong>{starships.length}</strong></p>
                  <p>Passengers: <strong>{starships.passengers}</strong></p>
                  <p>Starship class: <strong>{starships.starship_class}</strong></p>
                  <p>Pilots: {starshipPilots.map(starshipPilot => (
                    <ul>
                      <strong onClick={() => handleMove(starshipPilot.name)} {...register("charName", { required: true })}>{starshipPilot.name}</strong>
                    </ul>
                  ))}</p>
                  <p>Films: <strong>{starshipFilms.map(starshipFilms => (
                    <ul>
                      <strong onClick={() => handleMove(starshipFilms.title)} {...register("charName", { required: true })}>{starshipFilms.title}</strong>
                    </ul>
                  ))}</strong></p>
                </ul>
              )
            }}
          })}
        </ul>
        
        </S.Content>
      </S.Container>
    </>
  )
}