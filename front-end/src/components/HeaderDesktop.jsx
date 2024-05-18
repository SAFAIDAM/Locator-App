import React from "react";

function HeaderDesktop() { 

  return (
    <>
      <nav className="mt-11 flex items-center gap-4 ">
        <div className="relative flex-grow ">
          {" "}
          <input
            type="search"
            id="default-search"
            className="search-input block w-full p-[21px] ps-10 text-xs text-gray-900 border-none bg-[#F2F2F2] focus:ring-[#fff0] focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
            placeholder="265 Bd Hassan II, Agadir 80000, Morocco..."
            required
          />
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
        </div>
        <div>
          <div className="flex bg-[#F2F2F2] p-2 rounded-full pr-12">
            <input
              type="search"
              id="search-dropdown"
              className="block p-[10px] w-[300%] z-20 text-sm text-[#787373] focus:ring-[#fff0] focus:border-blue-500 bg-[#F2F2F2] border border-none rounded-s-full"
              placeholder="Agadir, Morocco"
              required
            />
            <button
              id="dropdown-button"
              data-dropdown-toggle="dropdown"
              className="flex-shrink-0 z-10 inline-flex items-center  py-2.5 px-4 text-[14px] text-center bg-[#F2F2F2] text-[#787373]"
              type="button"
              onClick= {() => {
                const dropdown = document.getElementById('dropdown');
                dropdown.classList.toggle('hidden')
              }}
            >
              Disctance
              <svg
                className="w-2.5 h-2.5 ms-2.5 text-[#787373]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"

            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Distance
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                   Best Rated
                  </button>
                </li>
              </ul>
            </div>
            <div className="relative w-full">
              <button
                type="submit"
                className="absolute min-w-20 text-sm font-medium h-full uppercase text-white bg-blue-700 rounded-[50px] border border-blue-700 "
              >
                search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default HeaderDesktop;
