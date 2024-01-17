"use client";
import React, { useContext } from "react";
import { AstronautContext } from "../contexts/astronaut.context";
import AstronautCard from "../components/AstronautCard";
import RevealEffect from "../components/RevealEffect";
import Pagination from "../components/Pagination";

const Astronauts = () => {
  const { astronauts } = useContext(AstronautContext);
  return (
    <div className="w-full md:w-4/5 lg:w-3/5 xl:w-4/5 mx-auto">
      <h3 className="text-gray-300 text-4xl text-center p-5">
        Meet the exceptional people that have ventured into space.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {astronauts.map((astronaut) => (
          <RevealEffect>
            <AstronautCard key={astronaut.id} astronaut={astronaut} />
          </RevealEffect>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default Astronauts;
