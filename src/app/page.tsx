"use client"
import Link from "next/link";
import Logo from "./components/Logo";
import RevealEffect from "./components/RevealEffect";

const Home = () => {
  return (
    <RevealEffect direcction="top cascade collapse">
      <div className="flex flex-col items-center justify-center align-center  mt-50 gap-5 mt-50 h-screen">
        <div className="w-1/2 mt-50">
          <Logo />
        </div>
        <p className="mt-8 text-lg text-white text-center">
          Welcome to SpaceX Explorer! Explore launches, rockets, and astronauts.
        </p>
        <Link
          href={"/launches"}
          className="text-center p-2 text-white rounded bg-gray-600 w-40 mt-3 hover:bg-gray-400"
        >
          Explore
        </Link>
      </div>
    </RevealEffect>
  );
};

export default Home;
