import Image from "next/image";
import React, { useState } from "react";
import RocketModal from "./RocketModal";
import { Slide } from "react-awesome-reveal";

type props = {
  rocket: Rocket;
};

const RocketPreview = ({ rocket }: props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="min-w-30 h-240 flex flex-1 justify-center items-center border border-black m-0 7.5px 15px overflow-hidden hover:bg-white hover:bg-opacity-60">
      <Slide direction="left">
        <h1 className="text-white cursor-pointer" onClick={toggleModal}>{rocket.name}</h1>
      </Slide>
      <div className="h-80 w-85 relative cursor-pointer transform hover:scale-110 hover:transition-transform-6000 hover:cubic-bezier(0.25, 0.45, 0.45, 0.95)">
        <Image
          src={rocket.images[0]}
          alt={rocket.name}
          layout="fill"
          objectFit="cover"
          className="rounded"
        />
      </div>
      {isModalOpen && <RocketModal rocket={rocket} toggleModal={toggleModal}/>}
    </div>
  );
};

export default RocketPreview;
