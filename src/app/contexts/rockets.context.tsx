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
};

export const RocketsContext = createContext<RocketsContextType>({
  rockets: [],
});

export const RocketProvider = ({ children }: RocketProviderProps) => {
  const [rockets, setRockets] = useState<Rocket[]>([]);
  const [error, setError] = useState<string | null>(null);
  console.log("ROCKETS1",rockets)

  const getRockets = useCallback(async () => {
    const fetchedRockets = await httpGetRockets();
    setRockets(fetchedRockets);
  }, []);

  useEffect(() => {
    getRockets();
  }, [getRockets]);

  const value: RocketsContextType = {
    rockets,
  };

  return (
    <RocketsContext.Provider value={value}>{children}</RocketsContext.Provider>
  );
};
