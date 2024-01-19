import React from "react";

type Props = {
  rocket: Rocket;
  toggleModal: () => void;
};

const RocketModal: React.FC<Props> = ({ rocket, toggleModal }) => {
  return (
    <>
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50"></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-md dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
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
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {rocket.name}
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {rocket.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RocketModal;
