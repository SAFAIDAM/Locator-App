import React, { useEffect, useState } from "react";
import mapimg from "../assets/mapimg.svg";
import Rating from "@mui/material/Rating";
import Collapsible from 'react-collapsible';
import Stack from "@mui/material/Stack";
import icondirectoin from "../assets/directionsIcon.svg";
import data from "../data.js";

function MapList() {

  return (
    <>
      <div className="md:mt-6 md:flex items-start gap-8">
        <section className="flex-grow w-full md:w-1/3 lg:w-1/12 sm:w-2/3  max-h-[36rem] p-4 bg-[#F2F2F2] rounded-[50px]">
          <div className="relative w-full h-auto md:max-w-md lg:max-w-lg mx-auto">
            <iframe
              className="responsive-iframe"
              src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;coord=52.70967533219885, -8.020019531250002&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <button className="button lg:hidden absolute top-1 right-0 md:hidden flex p-2 bg-[#828282c0] rounded-full cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M8 3.09779C8 3.09779 4.03374 2.74194 3.38783 3.38785C2.74191 4.03375 3.09783 8 3.09783 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 20.9022C8 20.9022 4.03374 21.2581 3.38783 20.6122C2.74191 19.9662 3.09783 16 3.09783 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.09779C16 3.09779 19.9663 2.74194 20.6122 3.38785C21.2581 4.03375 20.9022 8 20.9022 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 20.9022C16 20.9022 19.9663 21.2581 20.6122 20.6122C21.2581 19.9662 20.9022 16 20.9022 16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.0107 9.99847L20.0625 3.94678"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99695 14.0024L3.63965 20.3807"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.99732 10.0024L3.8457 3.85889"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9795 14.0024L20.5279 20.4983"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <br />
          </div>
        </section>

        {/** card section */}
        <div className="flex-col md:w-1/3 lg:w-1/3 max-h-[36rem] md:overflow-y-auto lg:overflow-y-auto  md:overflow-x-hidden  pr-5 scrollbar-sec">
          {data.map((item) => {
            return (
              <section
                key={item.id}
                className="w-full mb-2 p-6 ml-1 flex items-center justify-between rounded-[40px] bg-[#F2F2F2] "
              >
                <div className="">
                  <ul>
                    <li className="text-md hover:underline mb-2 text-[#8D8D8D] font-medium">
                      <a href="">
                        {item.location}
                        <span className="text-sm ">(40KM)</span>
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
            );
          })}
        </div>
      </div>
    </>
  );
}

export default MapList;
