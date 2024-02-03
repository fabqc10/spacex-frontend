"use client";
import React, { useContext } from "react";
import { LaunchesContext } from "../contexts/launches.context";
import Pagination from "../components/Pagination";
import LaunchCard from "../components/LaunchCard";
import { Slide } from "react-awesome-reveal";

const Launches = () => {
  const { launches, getlaunches, currentPage, error } =
    useContext(LaunchesContext);
  if (!launches) {
    return (
      <div>
        <h1 className="text-white">{error}</h1>
      </div>
    );
  }
  return (
    <>
      <div className="mt-10">
        {launches.map((launch) => (
          <Slide direction="up" key={launch.flight_number}>
            <LaunchCard launch={launch} key={launch.flight_number}/>
          </Slide>
        ))}
      </div>
      <Pagination currentPage={currentPage} fetchFunction={getlaunches} />
    </>
  );
};

export default Launches;
