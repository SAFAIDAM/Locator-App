import React, { useState } from "react";
import { data } from "../Cities";

function HeaderDesktop() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handelInput = async (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.trim() !== "") {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data)
      setData(data);
    } else {
      setData([]);
    }
  };

  const handleButtonClick = () => {
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.toggle("hidden");
  };

  const handleDropdownItemClick = (event) => {
    event.stopPropagation();
  };

  const handleDropdownClick = (itemValue) => {
    setValue(itemValue);
    setData([]); // Hide dropdown after selection
  };

  return (
    <>
      <nav className="mt-11 flex items-center gap-4">
        <div className="relative flex-grow">
          <input
            type="search"
            id="default-search"
            className="search-input block w-full p-[21px] ps-10 text-xs text-gray-900 border-none bg-[#F2F2F2] focus:ring-[#fff0] focus:border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
            placeholder="265 Bd Hassan II, Agadir 80000, Morocco..."
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
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
          {/** input Moroccan cities suggestions  */}

          <div className="flex bg-[#F2F2F2] p-2 rounded-full pr-12 relative">
            <input
              onChange={handelInput}
              value={value}
              type="text"
              id="search-dropdown"
              className="block p-[10px] w-[300%] z-20 text-sm text-[#787373] focus:ring-[#fff0] focus:border-blue-500 bg-[#F2F2F2] border border-none rounded-s-full "
              placeholder="Agadir, Morocco"
              required
            />
            <div
              id="dropdown-content"
              className={`z-10 bg-[#F2F2F2] divide-y divide-gray-100 rounded-lg shadow-md w-[8rem] dark:bg-gray-700 absolute top-full mt-1 right-0 transform translate-x-[-150%] ${
                value ? "" : "hidden"
              }`}
            >
              {value &&
                data
                  .filter((item) => item.name.toLowerCase().startsWith(value.toLowerCase()))
                  .map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleDropdownClick(item.name)}
                      className="cursor-pointer p-2 text-sm text-[#787373] ml-auto mr-auto"
                    >
                      <div className="flex items-center gap-3" >
                      <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width={20}
                            height={20}
                            color={"#787373"}
                            fill={"none"}
                          >
                            <path
                              d="M13.6177 21.367C13.1841 21.773 12.6044 22 12.0011 22C11.3978 22 10.8182 21.773 10.3845 21.367C6.41302 17.626 1.09076 13.4469 3.68627 7.37966C5.08963 4.09916 8.45834 2 12.0011 2C15.5439 2 18.9126 4.09916 20.316 7.37966C22.9082 13.4393 17.599 17.6389 13.6177 21.367Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                            <path
                              d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            />
                          </svg>{" "}
                        <p >
                          {" "}
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}

              {/* <ul
                className="py-2 text-sm text-[#787373] dark:text-gray-200 s"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    onClick={handleDropdownItem}
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
                    Templates
                  </button>
                </li>
              </ul> */}
            </div>

            {/**   */}

            <div className="absolute inset-y-3 left-0 w-[3px] bg-[#8D8D8D] mx-36 z-40 rounded-t-lg rounded-b-lg"></div>
            <div className="flex relative">
              <button
                id="dropdown-button"
                data-dropdown-toggle="dropdown"
                className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-[14px] text-center bg-[#F2F2F2] text-[#787373]"
                type="button"
                onClick={handleButtonClick}
              >
                Distance
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
            </div>
            <div className="relative w-full">
              <button
                type="submit"
                className="absolute min-w-20 text-sm font-medium h-full uppercase text-white bg-blue-700 rounded-[50px] border border-blue-700 hover:bg-blue-800"
              >
                Search
              </button>
            </div>

            <div
              id="dropdown"
              className="z-10  hidden bg-[#F2F2F2] divide-y divide-gray-100 rounded-lg shadow-md w-[7rem] dark:bg-gray-700 absolute top-full mt-1 right-0 transform translate-x-[-60%]"
            >
              <ul
                className="py-2 text-sm text-[#787373] dark:text-gray-200 s"
                aria-labelledby="dropdown-button"
              >
                <li>
                  <button
                    type="button"
                    onClick={handleDropdownItemClick}
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
                    Templates
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/**  Mobile header here */}
      <div className="m-0 block lg:hidden md:hidden">
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

export default HeaderDesktop;
