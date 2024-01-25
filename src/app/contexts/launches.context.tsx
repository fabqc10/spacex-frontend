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
  launches: Launch[];
  getlaunches: (page: number) => void;
  currentPage: number;
  error: string | null;
};

export const LaunchesContext = createContext<LaunchesContextType>({
  launches: [],
  getlaunches: () => {},
  currentPage: 1,
  error: null,
});

export const LaunchesProvider = ({ children }: LaunchesProviderProps) => {
  const [launches, setlaunches] = useState<Launch[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [error, setError] = useState<string | null>(null);

  const getlaunches = useCallback(async (page: number) => {
    try {
      const fetchedlaunches = await httpGetLaunches(page);
      setlaunches(fetchedlaunches);
      setCurrentPage(page);
      setError(null);
    } catch (error) {
      setError("Error fetching Launches. Please try again.");
    }
  }, []);

  useEffect(() => {
    getlaunches(currentPage);
  }, [getlaunches, currentPage]);

  const value: LaunchesContextType = {
    launches,
    getlaunches,
    currentPage,
    error,
  };

  return (
    <LaunchesContext.Provider value={value}>
      {children}
    </LaunchesContext.Provider>
  );
};
