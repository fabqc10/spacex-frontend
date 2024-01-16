"use client";

import Image from "next/image";

type props = {
  astronaut: Astronaut;
};

const AstronautCard = ({ astronaut }: props) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4 bg-white bg-opacity-60 transform hover:scale-105 transition-transform">
      <div className="relative h-80">
        <Image
          src={astronaut.image}
          alt={astronaut.name}
          layout="fill"
          objectFit="contain"
          className="rounded-full"
          loading="lazy"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{astronaut.name}</div>
        <p className="text-gray-700 text-base">Agency: {astronaut.agency}</p>
        <p className="text-gray-700 text-base">Status: {astronaut.status}</p>
      </div>
      <div className="px-6 py-4">
        <a
          href={astronaut.wikipedia}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Learn more on Wikipedia
        </a>
      </div>
    </div>
  );
};

export default AstronautCard;
