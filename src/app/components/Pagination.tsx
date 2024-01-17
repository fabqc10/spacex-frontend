import React from "react";

type props = {
    currentPage:number,
    fetchFunction:(page:number)=>void
}

const Pagination = ({currentPage,fetchFunction}:props) => {

    const handleNext = () => {
        fetchFunction(currentPage + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    const handlePrev = () => {
        if(currentPage > 1){
            fetchFunction(currentPage - 1);
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }

  return (
      <div className="flex flex-row mx-auto justify-center pb-10">
        <button
          type="button"
          className="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3"
        >
          <div className="flex flex-row align-middle" onClick={handlePrev}>
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <p className="ml-2">Prev</p>
          </div>
        </button>
        <button
          type="button"
          className="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3"
        >
          <div className="flex flex-row align-middle" onClick={handleNext}>
            <span className="mr-2">Next</span>
            <svg
              className="w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
  );
};

export default Pagination;
