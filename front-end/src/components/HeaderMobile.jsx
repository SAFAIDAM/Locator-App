import React from "react";

function HeaderMobile() {
  return (
    <>
      <div className="m-0">
        <div className="relative">
        <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
            {" "}
            <svg
              className="h-7 text-gray-500 dark:text-gray-400 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={30}
              height={30}
              color={"#787373"}
              fill={"none"}
            >
              <path
                d="M17.5 17.5L22 22"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="search-input block w-full p-[24px] text-xs text-gray-900 border-none bg-[#F2F2F2] focus:ring-[#fff0] focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-md" 
            placeholder="265 Bd Hassan II, Agadir 80000, Morocco..."
            required
          />
          
        </div>
      </div>
    </>
  );
}

export default HeaderMobile;
