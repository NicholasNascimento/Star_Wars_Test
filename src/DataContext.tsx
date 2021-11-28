import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "./services/api";

export interface CharProps {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
}

interface UserContextProps {
    children: ReactNode;
}

interface CharContextData {
    char: CharProps;
    name: string;
    search: (charName: string) => Promise<void>;
    inputError: boolean;
    setInputError: (inputError: boolean) => void;
}

export const DataContext = createContext({} as CharContextData)

export function UserProvider({children}: UserContextProps) {
  const navigate = useNavigate();

  const [inputError, setInputError] = useState<boolean>(false);
  const [char, setChar] = useState<CharProps>({} as CharProps);
  const [name, setName] = useState('');

  async function search(charName: string) {
    try {
      const characterData = await api.get(`/people/1/?format-json`);

      setChar(characterData.data);
      setName(charName);

      navigate("/character");
      console.log(charName);
    } catch {
      setInputError(true);
    }
  }

  return (
      <DataContext.Provider value={{char, name, search, inputError, setInputError}}>
        {children}
      </DataContext.Provider>
  )
}