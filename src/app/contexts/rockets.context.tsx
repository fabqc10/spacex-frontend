"use client";
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { httpGetRockets } from "../requests";

type RocketProviderProps = {
  children: ReactNode;
};

type RocketsContextType = {
  rockets: Rocket[];
  error: string | null;
};

export const RocketsContext = createContext<RocketsContextType>({
  rockets: [],
  error: null,
});

export const RocketProvider = ({ children }: RocketProviderProps) => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getRockets = useCallback(async () => {
    try {
      const fetchedRockets = await httpGetRockets();
      setRockets(fetchedRockets);
      setError(null);
    } catch (error) {
      setError("Error fetching Rockets. Please try again.");
    }
  }, []);

  useEffect(() => {
    getRockets();
  }, [getRockets]);

  const value: RocketsContextType = {
    rockets,
    error,
  };

  return (
    <RocketsContext.Provider value={value}>{children}</RocketsContext.Provider>
  );
};
