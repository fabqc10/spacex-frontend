import React, { createContext, ReactNode, useCallback, useEffect, useState } from "react";
import { httpGetCrew } from "../requests";

type AstronautProviderProps = {
  children: ReactNode;
};

type AstronautContextType = {
  astronauts: Astronaut[];
};

export const AstronautContext = createContext<AstronautContextType>({
  astronauts: [],
});

export const AstronautProvider = ({ children }: AstronautProviderProps) => {
  const [astronauts, setAstronauts] = useState<Astronaut[]>([]);

  console.log(astronauts);

  const getAstronauts = useCallback(async () => {
    const fetchedAstronauts = await httpGetCrew();
    setAstronauts(fetchedAstronauts);
  },[]);

  useEffect(() => {
    getAstronauts();
  },[getAstronauts]);

  const value: AstronautContextType = { astronauts };

  return (
    <AstronautContext.Provider value={value}>
      {children}
    </AstronautContext.Provider>
  );
};
