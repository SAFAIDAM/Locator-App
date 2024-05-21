import React from "react";
import mapimg from "../assets/mapimg.svg";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import icondirectoin from "../assets/directionsIcon.svg";

function MapList() {
  return (
    <>
      <div className="md:mt-11 md:flex items-start gap-8">
        <section className="flex-grow w-full md:w-1/3 lg:w-1/12 sm:w-2/3 p-4 bg-[#F2F2F2] rounded-[30px]">
          <img
            className="w-full h-auto md:max-w-md lg:max-w-lg mx-auto"
            src={mapimg}
            alt="Map"
          />
        </section>

        {/** card section */}

        <section className="w-full md:w-1/3 lg:w-1/3 p-5 pl-4 flex items-center justify-between bg-[#F2F2F2] rounded-[30px]">
          <div className="">
            <ul>
              <li className="text-lg hover:underline mb-2 text-[#8D8D8D] font-medium">
                <a href="">
                  Agadir, Morocco <span className="text-sm ">(40KM)</span>
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-1 mb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={17}
                height={17}
                color={"#AAAAAA"}
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
              </svg>
              <p className="text-clip text-[13px] text-[#AAAAAA]">
                BP 333 Av. Kadi Ayad, Agadir 80000
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <div></div>
              <p className="text-xs text-[#AAAAAA]">4,5</p>
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  defaultValue={2.5}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <p className="text-[#AAAAAA] text-[12px]">(1,5K)</p>
            </div>
            <div className="flex gap-1 items-center">
              <p className="flex items-center text-sm font-medium ml-1 text-[#78C65A]">
                Open
              </p>
              <span className="">.</span>
              <p className="text-sm font-medium ml-1 text-[#8D8D8D]">
                Closes at 12PM
              </p>
            </div>
          </div>
          <div className="flex-col items-center ml-2 ">
            <button className="bg-black p-3 rounded-full">
              <img src={icondirectoin} alt="" />
            </button>
            <p className="text-[11px] mt-1 text-[#8D8D8D] font-medium">
              DIRECTIONS
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default MapList;
