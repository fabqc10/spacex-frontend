"use client";
import React, {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { httpGetLaunches } from "../requests";

type LaunchesProviderProps = {
  children: ReactNode;
};

type LaunchesContextType = {
  launches: Astronaut[];
  getlaunches: (page: number) => void;
  currentPage: number;
};

export const LaunchesContext = createContext<LaunchesContextType>({
  launches: [],
  getlaunches: () => {},
  currentPage: 1,
});

export const LaunchesProvider = ({ children }: LaunchesProviderProps) => {
  const [launches, setlaunches] = useState<Astronaut[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const getlaunches = useCallback(async (page: number) => {
    const fetchedlaunches = await httpGetLaunches(page);
    setlaunches(fetchedlaunches);
    setCurrentPage(page);
  }, []);

  useEffect(() => {
    getlaunches(currentPage);
  }, [getlaunches, currentPage]);

  const value: LaunchesContextType = { launches, getlaunches, currentPage };

  return (
    <LaunchesContext.Provider value={value}>
      {children}
    </LaunchesContext.Provider>
  );
};
