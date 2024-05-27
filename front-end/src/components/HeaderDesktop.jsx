import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import icondirectoin from "../assets/directionsIcon.svg";
import axios from "axios";
import mapimg from "../assets/mapimg.svg";
function HeaderDesktop() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const handelInput = async (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (inputValue.trim() !== "") {
      const response = {
        method: "GET",
        url: "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions",
        headers: {
          "X-RapidAPI-Key":
            "f9c903cfdfmshef4a7ef13939606p1bfc95jsnbdb061abf24a",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
        params: {
          namePrefix: inputValue,
        },
      };

      try {
        const result = await axios.request(response);
        console.log(result.data.data);
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
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
    const dropdown = document.getElementById("dropdown");
    dropdown.classList.add("hidden");
  };
  return (
    <>
      {/**  Mobile header here */}
      <div className="fixed top-0 left-0 right-0 z-10 block m-0 bg-white shadow-md lg:hidden md:hidden mobile-nav">
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center mr-3 pointer-events-none">
            {" "}
            <svg
              className="mr-3 text-gray-500 h-7 dark:text-gray-400"
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
      {/**  Desktopheader here */}
      <div className="hidden lg:block md:block">
        <nav className="flex items-center gap-4 mt-6">
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
                className="mr-3 text-gray-500 h-7 dark:text-gray-400"
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
              {/* <section className="flex-grow w-full md:w-2/3 lg:w-3/4 p-4 bg-[#F2F2F2] rounded-[30px]">
          <img
            className="w-full h-auto mx-auto md:max-w-md lg:max-w-lg"
            src={mapimg}
            alt="Map"
          />
        </section> */}
            </div>
          </div>
          <div>
            {/** input Moroccan cities suggestions  */}

            <div className="flex bg-[#F2F2F2] p-2 rounded-full md:pr-36 relative">
              <input
                onChange={handelInput}
                value={value}
                type="text"
                id="search-dropdown"
                className="block p-[10px] ml-1 w-[700%] z-20 text-sm text-[#787373] focus:ring-[#fff0] focus:border-blue-500 bg-[#F2F2F2] border border-none rounded-s-full "
                placeholder="Agadir, Morocco"
                required
              />  
              <div
                id="dropdown-content"
                className={`z-10 bg-[#F2F2F2] divide-y divide-gray-100 rounded-lg shadow-md w-[12rem] dark:bg-gray-700 absolute top-full mt-1 right-0 transform translate-x-[-120%] ${
                  value ? "" : "hidden"
                }`}
              >
                {value &&
                  data
                    .filter((item) =>
                      item.name.toLowerCase().startsWith(value.toLowerCase())
                    )
                    .map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleDropdownClick(item.name)}
                        className="cursor-pointer p-2 text-sm text-[#787373] ml-auto mr-auto"
                      >
                        <div className="flex items-center gap-3">
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width={20}
                              height={20}
                              color={"#787373"}
                              fill={"none"}
                            > a
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
                          </div>

                          <div>
                            <p> {item.name}</p>
                          </div>
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

              <div className="absolute inset-y-3 left-0 w-[2px] bg-[#8D8D8D] mx-52 z-40 rounded-t-lg rounded-b-lg"></div>
              <div className="flex relative right-[-24%]">
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-[14px] text-center bg-[#F2F2F2] text-[#787373]"
                  type="button"
                  onClick={handleButtonClick}
                >
                  Distance
                  <svg
                    className="w-2.5 h-2.5 ms-3.5 text-[#787373]"
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
              <div className="relative w-full right-[-24%]">
                <button
                  type="submit"
                  className="absolute min-w-20 text-[13px] font-medium h-full uppercase text-white bg-[#1B7CB9] rounded-[50px] border border-[#1b7cb900] hover:bg-[#336686]"
                >
                  Search
                </button>
              </div>

              <div
                id="dropdown"
                className="z-10 bg-[#F2F2F2] divide-y divide-gray-100 rounded-lg shadow-md w-[7rem] dark:bg-gray-700 absolute top-full mt-1 right-0 transform translate-x-[-80%]"
              >
                <ul
                  className="py-2 text-sm text-[#787373] dark:text-gray-200"
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
      </div>
    </>
  );
}

export default HeaderDesktop;
