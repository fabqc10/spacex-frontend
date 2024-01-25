import React, { useEffect, useState } from "react";
import Image from "next/image";

type props = {
  launch: Launch;
};

const LaunchCard = ({ launch }: props) => {
  const [showFullDetails, setShowFullDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowFullDetails((prev) => !prev);
  };

  useEffect(() => {
    setShowFullDetails(false);
  },[launch])

  const renderDetails = () => {
    const { details } = launch;
    const maxLength = 100;
  
    if (!details) {
        return null;
      }
    
      const truncatedDetails = details.slice(0, maxLength);
    
      return (
        <>
          {showFullDetails ? (
            details
          ) : (
            <>
              {truncatedDetails}
              {details.length > maxLength && (
                <span
                  className="text-blue-500 cursor-pointer"
                  onClick={handleToggleDetails}
                >
                  ...Read more
                </span>
              )}
            </>
          )}
          {showFullDetails && (
            <span
              className="text-blue-500 cursor-pointer"
              onClick={handleToggleDetails}
            >
              Read less
            </span>
          )}
        </>
      );
  };
  

  return (
    <div className="max-w-xl mx-auto shadow-md rounded-md overflow-hidden bg-white bg-opacity-60 transform hover:scale-105 transition-transform mb-10">
      <div className="h-40 relative mt-2">
        <Image
          src={launch.links.patch.small}
          layout="fill"
          objectFit="contain"
          alt="rocket"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{launch.name}</h2>
        <div className="flex flex-wrap mb-4">
          <div className="w-full sm:w-1/2">
            <p>
              <span className="font-semibold">Flight:</span>{" "}
              {launch.flight_number}
            </p>
            <p>
              <span className="font-semibold">Rocket:</span>{" "}
              {launch.rocket.name}
            </p>
            <p>
              <span className="font-semibold">Type:</span> {launch.rocket.type}
            </p>
            <p>
              <span className="font-semibold">Company:</span>{" "}
              {launch.rocket.company}
            </p>
          </div>
          <div className="w-full sm:w-1/2">
            <p>
              <span className="font-semibold">Status:</span>{" "}
              {launch.upcoming === true
                ? "Upcoming"
                : launch.success === true
                ? "Success"
                : "Failure"}
            </p>
            <p>
              <span className="font-semibold">Date:</span> {launch.launchDate}
            </p>
            <p>
              {launch.details && (
                <span className="font-semibold">Details:</span>
              )}
              {launch.details && renderDetails()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchCard;
