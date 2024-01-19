"use client";
import React, { useContext } from "react";
import { RocketsContext } from "../contexts/rockets.context";
import RocketPreview from "../components/RocketPreview";

const Rockets = () => {
  const { rockets } = useContext(RocketsContext);
  console.log("ROCKETS",rockets)
  return (
    <div>
        {rockets.map(rocket =>(
            <RocketPreview rocket={rocket}/>
        ))}
    </div>
  );
};

export default Rockets;
