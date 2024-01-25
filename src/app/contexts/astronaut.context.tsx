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
  currentPage: number;
  error: string | null;
};

export const AstronautContext = createContext<AstronautContextType>({
  astronauts: [],
  getAstronauts: () => {},
  currentPage: 1,
  error: null,
});

export const AstronautProvider = ({ children }: AstronautProviderProps) => {
  const [astronauts, setAstronauts] = useState<Astronaut[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const getAstronauts = useCallback(async (page: number) => {
    try {
      const fetchedAstronauts = await httpGetCrew(page);
      setAstronauts(fetchedAstronauts);
      setCurrentPage(page);
      setError(null);
    } catch (error) {
      setError("Error fetching astronauts. Please try again.");
    }
  }, []);

  useEffect(() => {
    getAstronauts(currentPage);
  }, [getAstronauts, currentPage]);

  const value: AstronautContextType = {
    astronauts,
    getAstronauts,
    currentPage,
    error,
  };

  return (
    <AstronautContext.Provider value={value}>
      {children}
    </AstronautContext.Provider>
  );
};
