"use client";
import React, { useContext, useState } from "react";
import { RocketsContext } from "../contexts/rockets.context";
import RocketPreview from "../components/RocketPreview";
import RocketModal from "../components/RocketModal";

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
