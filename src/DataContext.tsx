import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "./services/api";

interface LinkProps {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}

interface PeopleProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [''];
  species: [''];
  vehicles: [''];
  starships: [''];
  url: [''];
}

interface PlanetsProps {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: [''];
  films: [''];
  url: string;
}

interface FilmsProps {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  released_date: string;
  characters: [''];
  planets: [''];
  vehicles: [''];
  species: [''];
  url: [''];
}

interface SpeciesProps {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  skin_colors: string;
  hair_colors: string;
  eye_colors: string;
  average_lifespan: string;
  homeworld: string;
  language: string;
  people: [''];
  films: [''];
}

interface VehiclesProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  vehicle_class: string;
  pilots: [''];
  films: [''];
}

interface StarshipsProps {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: [''];
  films: [''];
}

interface UserContextProps {
    children: ReactNode;
}

interface CharContextData {
    link: LinkProps[];
    name: string;
    totalPeople: PeopleProps[];
    totalPlanets: PlanetsProps[];
    films: FilmsProps[];
    totalSpecies: SpeciesProps[];
    totalVehicles: VehiclesProps[];
    totalStarships: StarshipsProps[];
    search: (charName: string) => Promise<void>;
    inputError: boolean;
    setInputError: (inputError: boolean) => void;
}

export const DataContext = createContext({} as CharContextData)

export function UserProvider({children}: UserContextProps) {
  const navigate = useNavigate();

  const [inputError, setInputError] = useState<boolean>(false);
  const [link, setLink] = useState<LinkProps[]>([]);
  const [name, setName] = useState('');
  const [people, setPeople] = useState<PeopleProps[]>([]);
  const [people2, setPeople2] = useState<PeopleProps[]>([]);
  const [people3, setPeople3] = useState<PeopleProps[]>([]);
  const [people4, setPeople4] = useState<PeopleProps[]>([]);
  const [people5, setPeople5] = useState<PeopleProps[]>([]);
  const [people6, setPeople6] = useState<PeopleProps[]>([]);
  const [people7, setPeople7] = useState<PeopleProps[]>([]);
  const [people8, setPeople8] = useState<PeopleProps[]>([]);
  const [people9, setPeople9] = useState<PeopleProps[]>([]);
  const [planets, setPlanets] = useState<PlanetsProps[]>([]);
  const [planets2, setPlanets2] = useState<PlanetsProps[]>([]);
  const [planets3, setPlanets3] = useState<PlanetsProps[]>([]);
  const [planets4, setPlanets4] = useState<PlanetsProps[]>([]);
  const [planets5, setPlanets5] = useState<PlanetsProps[]>([]);
  const [planets6, setPlanets6] = useState<PlanetsProps[]>([]);
  const [planets7, setPlanets7] = useState<PlanetsProps[]>([]);
  const [films, setFilms] = useState<FilmsProps[]>([]);
  const [species, setSpecies] = useState<SpeciesProps[]>([]);
  const [species2, setSpecies2] = useState<SpeciesProps[]>([]);
  const [species3, setSpecies3] = useState<SpeciesProps[]>([]);
  const [species4, setSpecies4] = useState<SpeciesProps[]>([]);
  const [vehicles, setVehicles] = useState<VehiclesProps[]>([]);
  const [vehicles2, setVehicles2] = useState<VehiclesProps[]>([]);
  const [vehicles3, setVehicles3] = useState<VehiclesProps[]>([]);
  const [vehicles4, setVehicles4] = useState<VehiclesProps[]>([]);
  const [starships, setStarships] = useState<StarshipsProps[]>([]);
  const [starships2, setStarships2] = useState<StarshipsProps[]>([]);
  const [starships3, setStarships3] = useState<StarshipsProps[]>([]);
  const [starships4, setStarships4] = useState<StarshipsProps[]>([]);

  async function search(charName: string) {
    try {
      const characterData = await api.get(`https://swapi.py4e.com/api/?search=&format=json`);
      const peopleData = await api.get(`${characterData.data.people}?search=&format=json`);
      const peopleDataPage2 = await api.get(`${characterData.data.people}?page=2&format=json`);
      const peopleDataPage3 = await api.get(`${characterData.data.people}?page=3&format=json`);
      const peopleDataPage4 = await api.get(`${characterData.data.people}?page=4&format=json`);
      const peopleDataPage5 = await api.get(`${characterData.data.people}?page=5&format=json`);
      const peopleDataPage6 = await api.get(`${characterData.data.people}?page=6&format=json`);
      const peopleDataPage7 = await api.get(`${characterData.data.people}?page=7&format=json`);
      const peopleDataPage8 = await api.get(`${characterData.data.people}?page=8&format=json`);
      const peopleDataPage9 = await api.get(`${characterData.data.people}?page=9&format=json`);
      const planetsData = await api.get(`${characterData.data.planets}?search=&format=json`);
      const planetsData2 = await api.get(`${characterData.data.planets}?page=2&format=json`);
      const planetsData3 = await api.get(`${characterData.data.planets}?page=3&format=json`);
      const planetsData4 = await api.get(`${characterData.data.planets}?page=4&format=json`);
      const planetsData5 = await api.get(`${characterData.data.planets}?page=5&format=json`);
      const planetsData6 = await api.get(`${characterData.data.planets}?page=6&format=json`);
      const planetsData7 = await api.get(`${characterData.data.planets}?page=7&format=json`);
      const filmsData = await api.get(`${characterData.data.films}?search=&format=json`);
      const speciesData = await api.get(`${characterData.data.species}?search=&format=json`);
      const speciesData2 = await api.get(`${characterData.data.species}?page=2&format=json`);
      const speciesData3 = await api.get(`${characterData.data.species}?page=3&format=json`);
      const speciesData4 = await api.get(`${characterData.data.species}?page=4&format=json`);
      const vehiclesData = await api.get(`${characterData.data.vehicles}?search=&format=json`);
      const vehiclesData2 = await api.get(`${characterData.data.vehicles}?page=2&format=json`);
      const vehiclesData3 = await api.get(`${characterData.data.vehicles}?page=3&format=json`);
      const vehiclesData4 = await api.get(`${characterData.data.vehicles}?page=4&format=json`);
      const starshipsData = await api.get(`${characterData.data.starships}?search=&format=json`);
      const starshipsData2 = await api.get(`${characterData.data.starships}?page=2&format=json`);
      const starshipsData3 = await api.get(`${characterData.data.starships}?page=3&format=json`);
      const starshipsData4 = await api.get(`${characterData.data.starships}?page=4&format=json`);

      setLink(characterData.data);
      setName(charName);
      setPeople(peopleData.data.results);
      setPeople2(peopleDataPage2.data.results);
      setPeople3(peopleDataPage3.data.results);
      setPeople4(peopleDataPage4.data.results);
      setPeople5(peopleDataPage5.data.results);
      setPeople6(peopleDataPage6.data.results);
      setPeople7(peopleDataPage7.data.results);
      setPeople8(peopleDataPage8.data.results);
      setPeople9(peopleDataPage9.data.results);
      setPlanets(planetsData.data.results);
      setPlanets2(planetsData2.data.results);
      setPlanets3(planetsData3.data.results);
      setPlanets4(planetsData4.data.results);
      setPlanets5(planetsData5.data.results);
      setPlanets6(planetsData6.data.results);
      setPlanets7(planetsData7.data.results);
      setFilms(filmsData.data.results);
      setSpecies(speciesData.data.results);
      setSpecies2(speciesData2.data.results);
      setSpecies3(speciesData3.data.results);
      setSpecies4(speciesData4.data.results);
      setVehicles(vehiclesData.data.results);
      setVehicles2(vehiclesData2.data.results);
      setVehicles3(vehiclesData3.data.results);
      setVehicles4(vehiclesData4.data.results);
      setStarships(starshipsData.data.results);
      setStarships2(starshipsData2.data.results);
      setStarships3(starshipsData3.data.results);
      setStarships4(starshipsData4.data.results);

      navigate("/character");
    } catch {
      setInputError(true);
    }
  }

  const totalPeople = people.concat(people2, people3, people4, people5, people6, people7, people8, people9);
  const totalPlanets = planets.concat(planets2, planets3, planets4, planets5, planets6, planets7);
  const totalSpecies = species.concat(species2, species3, species4);
  const totalVehicles = vehicles.concat(vehicles2, vehicles3, vehicles4);
  const totalStarships = starships.concat(starships2, starships3, starships4);

  return (
      <DataContext.Provider value={{link, name, totalPeople, totalPlanets, films, totalSpecies, totalVehicles, totalStarships, search, inputError, setInputError}}>
        {children}
      </DataContext.Provider>
  )
}