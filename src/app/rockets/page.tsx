"use client";
import React, { useContext, useState } from "react";
import { RocketsContext } from "../contexts/rockets.context";
import RocketPreview from "../components/RocketPreview";
import RocketModal from "../components/RocketModal";

const Rockets = () => {
  const { rockets } = useContext(RocketsContext);
  console.log("ROCKETS", rockets);
  return (
    <>
      <div>
        {rockets.map(rocket =>(
            <RocketPreview rocket={rocket}/>
        ))}
    </div>
    </>
  );
};

export default Rockets;
