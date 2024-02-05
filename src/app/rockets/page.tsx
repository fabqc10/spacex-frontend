"use client";
import React, { useContext} from "react";
import { RocketsContext } from "../contexts/rockets.context";
import RocketPreview from "../components/RocketPreview";

const Rockets = () => {
  const { rockets, error } = useContext(RocketsContext);
  if (!rockets) {
    return (
      <div>
        <h1 className="text-white">{error}</h1>
      </div>
    );
  }
  return (
    <>
      <div>
        {rockets.map((rocket) => (
          <RocketPreview rocket={rocket} key={rocket.id}/>
        ))}
      </div>
    </>
  );
};

export default Rockets;
