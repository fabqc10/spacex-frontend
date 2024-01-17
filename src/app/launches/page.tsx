"use client";
import React, { useContext } from "react";
import { LaunchesContext } from "../contexts/launches.context";
import Pagination from "../components/Pagination";
import LaunchCard from "../components/LaunchCard";
import RevealEffect from "../components/RevealEffect";

const Launches = () => {
  const { launches, getlaunches, currentPage } = useContext(LaunchesContext);
  return (
    <>
      <div className="mt-10">
        {launches.map((launch) => (
          <RevealEffect>
            <LaunchCard launch={launch} />
          </RevealEffect>
        ))}
      </div>
      <Pagination currentPage={currentPage} fetchFunction={getlaunches} />
    </>
  );
};

export default Launches;
