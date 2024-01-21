import Image from "next/image";
import React, { useState } from "react";

type Props = {
  rocket: Rocket;
};

const CarouselImg: React.FC<Props> = ({ rocket }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % rocket.images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? rocket.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-full">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {rocket.images.map((img, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700 ease-in-out`}
          >
            <img
              src={img}
              alt={`image ${idx + 1}`}
              className="absolute block w-full h-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
            {/* <Image
              src={img}
              fill
              objectFit="cover"
              className="rounded"
              loading="lazy"
              alt="img"
            /> */}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={prevSlide}
      ></button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={nextSlide}
      >
        {/* ... (next button SVG) */}
      </button>
    </div>
  );
};

export default CarouselImg;
