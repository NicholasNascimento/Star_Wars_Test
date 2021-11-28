import { createContext, ReactNode, useState } from "react";
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
    search: () => Promise<void>;
}

export const DataContext = createContext({} as CharContextData)

export function UserProvider({children}: UserContextProps) {
  const [char, setChar] = useState<CharProps>({} as CharProps);

  async function search() {
    const characterData = await api.get(`/people/1/?format-json`);

    setChar(characterData.data);
  }

  return (
      <DataContext.Provider value={{char, search}}>
        {children}
      </DataContext.Provider>
  )
}