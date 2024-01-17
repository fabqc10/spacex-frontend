"use client";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { httpGetCrew } from "../requests";

type AstronautProviderProps = {
  children: ReactNode;
};

type AstronautContextType = {
  astronauts: Astronaut[];
  getAstronauts: (page: number) => void;
  currentPage: number
};

export const AstronautContext = createContext<AstronautContextType>({
  astronauts: [],
  getAstronauts: () => {},
  currentPage:1
});

export const AstronautProvider = ({ children }: AstronautProviderProps) => {
  const [astronauts, setAstronauts] = useState<Astronaut[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getAstronauts = useCallback(async (page: number) => {
    const fetchedAstronauts = await httpGetCrew(page);
    setAstronauts(fetchedAstronauts);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    getAstronauts(currentPage);
  }, [getAstronauts, currentPage]);

  const value: AstronautContextType = { astronauts, getAstronauts, currentPage };

  return (
    <AstronautContext.Provider value={value}>
      {children}
    </AstronautContext.Provider>
  );
};
