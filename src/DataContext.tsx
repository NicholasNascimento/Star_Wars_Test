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
    people: PeopleProps[];
    planets: PlanetsProps[];
    films: FilmsProps[];
    species: SpeciesProps[];
    vehicles: VehiclesProps[];
    starships: StarshipsProps[];
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
  const [planets, setPlanets] = useState<PlanetsProps[]>([]);
  const [films, setFilms] = useState<FilmsProps[]>([]);
  const [species, setSpecies] = useState<SpeciesProps[]>([]);
  const [vehicles, setVehicles] = useState<VehiclesProps[]>([]);
  const [starships, setStarships] = useState<StarshipsProps[]>([]);

  async function search(charName: string) {
    try {
      const characterData = await api.get(`https://swapi.py4e.com/api/?search=&format=json`);
      const peopleData = await api.get(`${characterData.data.people}?search=&format=json`);
      const planetsData = await api.get(`${characterData.data.planets}?search=&format=json`);
      const filmsData = await api.get(`${characterData.data.films}?search=&format=json`);
      const speciesData = await api.get(`${characterData.data.species}?search=&format=json`);
      const vehiclesData = await api.get(`${characterData.data.vehicles}?search=&format=json`);
      const starshipsData = await api.get(`${characterData.data.starships}?search=&format=json`);

      setLink(characterData.data);
      setName(charName);
      setPeople(peopleData.data.results);
      setPlanets(planetsData.data.results);
      setFilms(filmsData.data.results);
      setSpecies(speciesData.data.results);
      setVehicles(vehiclesData.data.results);
      setStarships(starshipsData.data.results);

      navigate("/character");
    } catch {
      setInputError(true);
    }
  }

  return (
      <DataContext.Provider value={{link, name, people, planets, films, species, vehicles, starships, search, inputError, setInputError}}>
        {children}
      </DataContext.Provider>
  )
}