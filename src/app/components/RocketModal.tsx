import React from "react";
import CarouselImg from "./Carousel";

type Props = {
  rocket: Rocket;
  toggleModal: () => void;
};

const RocketModal: React.FC<Props> = ({ rocket, toggleModal }) => {
  return (
    <div className="">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50  mx-auto">
      <div className="bg-white rounded-lg shadow-md dark:bg-gray-700 w-full h-100 max-w-6xl max-h-8xl overflow-y-o">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {rocket.name}
            </p>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={toggleModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-4 mt-1 w-full justify-start items-center">
          <div className="ml-4 bg-white rounded-lg border shadow-xl h-7xl max-w-3xl overflow-y-auto">
              <div className="p-4 space-y-0">
                <label htmlFor="description" className="text-italic">
                  Description
                </label>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  {rocket.description}
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 p-2 md:p-2">
                <div>
                  <label htmlFor="name" className="text-italic">
                    Name
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.name}
                  </p>
                </div>
                <div>
                  <label htmlFor="height" className="text-italic">
                    Height
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.height.meters} m
                  </p>
                </div>
                <div>
                  <label htmlFor="mass" className="text-italic">
                    Mass
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.mass.kg} kg
                  </p>
                </div>
                <div>
                  <label htmlFor="status" className="text-italic">
                    Status
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.active
                      ? "ACTIVE"
                      : "IN DEVELOPMENT" &&
                        rocket.name === "Falcon 1" &&
                        "RETIRED"}
                  </p>
                </div>
                <div>
                  <label htmlFor="cost" className="text-italic">
                    Launch Cost
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.cost} $
                  </p>
                </div>
                <div>
                  <label htmlFor="firstFlight" className="text-italic">
                    First Flight
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.firstFlight}
                  </p>
                </div>
                <div>
                  <label htmlFor="country" className="text-italic">
                    Country
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.country}
                  </p>
                </div>
                <div>
                  <label htmlFor="company" className="text-italic">
                    Company
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.company}
                  </p>
                </div>
                <div>
                  <label htmlFor="type" className="text-italic">
                    Type
                  </label>
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    {rocket.type}
                  </p>
                </div>
              </div>
            </div>
            <div className="w-80 h-100 mt-6">
              <CarouselImg rocket={rocket} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RocketModal;
