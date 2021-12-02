import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { DataContext } from "../../DataContext";

import * as S from "./styles";

export function Character() {
  const navigate = useNavigate();
  const { search, inputError, setInputError, name, totalPeople, totalPlanets, films, totalSpecies, totalVehicles, totalStarships } = useContext(DataContext);
  const { register } = useForm();
  const key = (name);
  const favorites = {key, name};
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

  async function handleMove(data: string) {
    if(!inputError) {
      search(data);
    } else {
      setInputError(false);
      search(data);
    }
  }

  function handleFavorite(name: string) {
    if (localStorage.getItem('name') === null) {
      localStorage.setItem('name', JSON.stringify([favorites]));
    } else {
      localStorage.setItem(
        'name',
        JSON.stringify([
          ...JSON.parse(localStorage.getItem('name')!),
          favorites
        ])
      );
    }

    navigate("/favorites");
  }

  return (
    <>
      <Header />
      <S.Container>
        <S.Content>
        <button onClick={() => handleFavorite(name)}>
          Favoritar
        </button>
        <ul>
          {(person?.name === name) && 
            <ul key={person.name}>
              <p>Name: {person.name}</p>
              <p>Height: {person.height}</p>
              <p>Mass: {person.mass}</p>
              <p>Hair color: {person.hair_color}</p>
              <p>Skin color: {person.skin_color}</p>
              <p>Eye color: {person.eye_color}</p>
              <p>Birth year: {person.birth_year}</p>
              <p>Gender: {person.gender}</p>
              <p className="link">Homeworld: {peoplePlanets.map(planetChar => (
                  <strong key={planetChar.url} onClick={() => handleMove(planetChar.name)} {...register("charName", { required: true })}>{planetChar.name}</strong>
              ))}</p>
              <p>Films: {peopleFilms.map(filmsChar => (
                  <strong key={filmsChar.url} onClick={() => handleMove(filmsChar.title)} {...register("charName", { required: true })}>{filmsChar.title}</strong>
              ))}</p>
              <p>Species: {peopleSpecies.map(speciesChar => (
                  <strong key={speciesChar.url} onClick={() => handleMove(speciesChar.name)} {...register("charName", { required: true })}>{speciesChar.name}</strong>
              ))}</p>
              <p>Vehicles: {peopleVehicles.map(vehiclesChar => (
                  <strong key={vehiclesChar.url} onClick={() => handleMove(vehiclesChar.name)} {...register("charName", { required: true })}>{vehiclesChar.name}</strong>
              ))}</p>
              <p>Starships: {peopleStarships.map(starshipsChar => (
                  <strong key={starshipsChar.url} onClick={() => handleMove(starshipsChar.name)} {...register("charName", { required: true })}>{starshipsChar.name}</strong>
              ))}</p>
            </ul>
          }

          {(planet?.name === name) &&
            <ul key={planet.name}>
              <p>Name: {planet.name}</p>
              <p>Rotation Period: {planet.rotation_period}</p>
              <p>Orbital Period: {planet.orbital_period}</p>
              <p>Diameter: {planet.diameter}</p>
              <p>Climate: {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Population: {planet.population}</p>
              <p className="link">Residents: {planetsResidents.map(planetResid => (
                  <strong key={planetResid.url} onClick={() => handleMove(planetResid.name)} {...register("charName", { required: true })}>{planetResid.name}</strong>
              ))}</p>
              <p>Films: {planetsFilms.map(planetFilms => (
                  <strong key={planetFilms.url} onClick={() => handleMove(planetFilms.title)} {...register("charName", { required: true })}>{planetFilms.title}</strong>
              ))}</p>
            </ul>
          }

          {(film?.title === name) &&
            <ul key={film.episode_id}>
              <p>Name: {film.title}</p>
              <p>Director: {film.director}</p>
              <p>Producer: {film.producer}</p>
              <p className="link">Characters: {filmCharacters.map(filmCharac => (
                  <strong key={filmCharac.url} onClick={() => handleMove(filmCharac.name)} {...register("charName", { required: true })}>{filmCharac.name}</strong>
              ))}</p>
              <p>Planets: {filmPlanets.map(filmPlan => (
                  <strong key={filmPlan.url} onClick={() => handleMove(filmPlan.name)} {...register("charName", { required: true })}>{filmPlan.name}</strong>
              ))}</p>
              <p>Starships: {filmStarships.map(filmStar => (
                  <strong key={filmStar.url} onClick={() => handleMove(filmStar.name)} {...register("charName", { required: true })}>{filmStar.name}</strong>
              ))}</p>
              <p>Vehicles: {filmVehicles.map(filmVehic => (
                  <strong key={filmVehic.url} onClick={() => handleMove(filmVehic.name)} {...register("charName", { required: true })}>{filmVehic.name}</strong>
              ))}</p>
              <p>Species: {filmSpecies.map(filmSpec => (
                  <strong key={filmSpec.url} onClick={() => handleMove(filmSpec.name)} {...register("charName", { required: true })}>{filmSpec.name}</strong>
              ))}</p>
            </ul>
          }

          {(specie?.name === name) &&
            <ul key={specie.name}>
              <p>Name: {specie.name}</p>
              <p>Classification: {specie.classification}</p>
              <p>Designation: {specie.designation}</p>
              <p>Average Height: {specie.average_height}</p>
              <p>Skin colors: {specie.skin_colors}</p>
              <p>Hair colors: {specie.hair_colors}</p>
              <p>Eye colors: {specie.eye_colors}</p>
              <p>Language: {specie.language}</p>
              <p className="link">Homeworld: {speciePlanets.map(speciePlan => (
                  <strong key={speciePlan.url} onClick={() => handleMove(speciePlan.name)} {...register("charName", { required: true })}>{speciePlan.name}</strong>
              ))}</p>
              <p>People: {specieCharacters.map(specieChar => (
                  <strong key={specieChar.url} onClick={() => handleMove(specieChar.name)} {...register("charName", { required: true })}>{specieChar.name}</strong>
              ))}</p>
              <p>Films: {specieFilms.map(specieFilm => (
                  <strong key={specieFilm.url} onClick={() => handleMove(specieFilm.title)} {...register("charName", { required: true })}>{specieFilm.title}</strong>
              ))}</p>
            </ul>
          }

          {(vehicle?.name === name) &&
            <ul key={vehicle.name}>
              <p>Name: {vehicle.name}</p>
              <p>Model: {vehicle.model}</p>
              <p>Manufacturer: {vehicle.manufacturer}</p>
              <p>cost_in_credits: {vehicle.cost_in_credits}</p>
              <p>Length: {vehicle.length}</p>
              <p>Passengers: {vehicle.passengers}</p>
              <p>Vehicle class: {vehicle.vehicle_class}</p>
              <p className="link">Pilots: {vehiclePilots.map(vehiclePilots => (
                  <strong key={vehiclePilots.url} onClick={() => handleMove(vehiclePilots.name)} {...register("charName", { required: true })}>{vehiclePilots.name}</strong>
              ))}</p>
              <p>Films: {vehicleFilms.map(vehicleFilms => (
                  <strong key={vehicleFilms.url} onClick={() => handleMove(vehicleFilms.title)} {...register("charName", { required: true })}>{vehicleFilms.title}</strong>
              ))}</p>
            </ul>
          }

          {(starship?.name === name) &&
            <ul key={starship.name}>
              <p>Name: {starship.name}</p>
              <p>Model: {starship.model}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <p>cost_in_credits: {starship.cost_in_credits}</p>
              <p>Length: {starship.length}</p>
              <p>Passengers: {starship.passengers}</p>
              <p>Starship class: {starship.starship_class}</p>
              <p className="link">Pilots: {starshipPilots.map(starshipPilot => (
                  <strong key={starshipPilot.url} onClick={() => handleMove(starshipPilot.name)} {...register("charName", { required: true })}>{starshipPilot.name}</strong>
              ))}</p>
              <p>Films: {starshipFilms.map(starshipFilms => (
                  <strong key={starshipFilms.url} onClick={() => handleMove(starshipFilms.title)} {...register("charName", { required: true })}>{starshipFilms.title}</strong>
              ))}</p>
            </ul>
          }
        </ul>
        </S.Content>
      </S.Container>
    </>
  )
}