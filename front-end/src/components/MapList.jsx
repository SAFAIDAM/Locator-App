import React, { useEffect, useState, useRef } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import icondirectoin from "../assets/directionsIcon.svg";
import { APIProvider, Map, Marker, InfoWindow, AdvancedMarker } from "@vis.gl/react-google-maps";
import { useDispatch } from "react-redux";
import { fetchData , setResults , setLocation} from "../redux/maps/mapsSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import markerImage from '../assets/devoxx-morocco.jpg'

function MapList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.map.data);
  const results = useSelector((state) => state.map.results)
  const isLoading = useSelector((state) => state.map.isLoading);
  const currentLocation = useSelector((state) => state.map.currentLocation)
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("");

   const handleShowMore= () => {
    setPage(page + 1)
    const array = data.slice(0, page * 5)
    dispatch(setResults(array))
  }

  useEffect(() => {
    dispatch(fetchData( ));
  }, []);
  
  
  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const collapsedStyle = { height: "1rem" };
  const expandedStyle = { height: "690%" };

  const handleinput = (e) => {
    setSearch(e.target.value);
  };

  const collapsedIcon = (
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
  );

  const expandedIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={24}
      height={24}
      color={"#ffffff"}
      fill={"none"}
    >
      <path
        d="M14.2299 17.9947C14.2194 17.2447 13.7042 14.7612 14.2307 14.2347C14.7573 13.7083 17.24 14.2247 17.9897 14.2355M20.9997 20.9981L14.6149 14.6146"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7698 17.9947C9.7803 17.2447 10.2955 14.7612 9.769 14.2347C9.24247 13.7083 6.75975 14.2247 6.01005 14.2355M3 20.9981L9.38478 14.6146"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.00765 9.76133C6.75739 9.7709 9.24092 10.2832 9.76664 9.75585C10.2922 9.22853 9.77284 6.74581 9.76116 5.99592M9.37715 9.36743L3.00195 3.00244"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.9918 9.76133C17.2421 9.7709 14.7585 10.2832 14.2328 9.75585C13.7072 9.22853 14.2266 6.74581 14.2383 5.99592M14.6223 9.36743L20.9975 3.00244"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const getStatus = (schedule) => {
   
    function timeToMinutes(timeString) {
      const [hours, minutes] = timeString.split(':').map(Number);
      return hours * 60 + minutes;
    }
  
  
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentTimeInMinutes = currentHours * 60 + currentMinutes;
  

    for (const { To, From } of schedule) {
      const openTimeInMinutes = timeToMinutes(From);
      const closeTimeInMinutes = timeToMinutes(To);
  

      if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
        return `Open, Closes at ${To}`;
      }
    }
  
    
    return `Closed, Opens at ${schedule[0].From}`;
  }
  const getCurrentDay = () => {
    const daysOfWeek = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
    const currentDate = new Date();
    const currentDayIndex = currentDate.getDay();

    return daysOfWeek[currentDayIndex];
  }
  const getCurrentSchedule = openHours => { 
    if (!openHours) return 
    const currentDay = getCurrentDay()
    const results = Object.keys(openHours).filter((key) => key === currentDay)
   
    const openValues = openHours[results]
    return getStatus(openValues)
  }

  return (
    <>
      
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
          <div className="items-start block gap-8 lg:flex md:mt-6 ">
            <section className="flex-grow w-full md:w-1/3 lg:w-1/12 sm:w-2/3 max-h-[36rem] p-4 rounded-[50px] relative z-0 mt-[65px] md:mt-0">
              <div
                className="relative w-full h-auto md:max-w-md"
                style={isCollapsed ? collapsedStyle : expandedStyle}
              >
                <div
                  className={`responsive-iframe lg:ml-[-1rem] md:w-[340%] lg:w-[178%]`}
                >
                  <Map defaultZoom={12} center={currentLocation}>
                  
                  { data.length > 0 && 
                    data.map((item) => {
                      return (
                        <Marker
                          key={item.id}
                          
                          position={{lat: parseInt(item.address.latitude), lng: parseInt(item.address.longitude)}}
                        >
                        {/* <img src={markerImage} width={32} height={32} /> */}
                        </Marker>
                      )
                    })
                  }
                  </Map>
                </div>
                <button
                  className="button lg:hidden absolute top-1 right-0 md:hidden flex p-2 bg-[#828282db] rounded-full cursor-pointer text-white"
                  onClick={toggleCollapse}
                >
                  {isCollapsed ? collapsedIcon : expandedIcon}
                </button>
                <br />
              </div>
            </section>

            {/* <div> */}
            {/**  mobile header  */}

            {/** card section */}

            <div className="flex items-center justify-center mt-5 mb-5 lg:hidden md:hidden md:bg-transparent "></div>
            <div
              className="flex-col
         md:z-0 lg:w-1/3 max-h-[36rem] md:overflow-y-auto lg:overflow-y-auto md:overflow-x-hidden md:pr-5 pr-1 pl-1 scrollbar-sec relative md:bg-transparent bg-[#ffff] pt-1 rounded-[40px] tablet:w-full md:mt-[34rem] lg:pt-3 md:pt-10 lg:mt-0 md:bg-white "
            >
              <div className="flex items-center justify-center mt-5 mb-5 lg:hidden md:hidden md:bg-transparent ">
                <div className="flex bg-[#F2F2F2] p-2 rounded-full pr-[8.4rem] relative w-[96%] ">
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    id="search-dropdown"
                    className="block p-[10px] ml-1 w-[900%] md:z-20 text-[13px] text-[#787373] focus:ring-[#fff0] focus:border-blue-500 bg-[#F2F2F2] border border-none rounded-s-full "
                    placeholder="Search By City"
                    required
                  />
                  <div
                    id="dropdown-content"
                    className={`md:z-10 z-10 bg-[#F2F2F2] divide-y divide-gray-100 rounded-lg shadow-md w-[9rem] dark:bg-gray-700 absolute top-full mt-1 right-0 transform translate-x-[-140%] ${
                      search ? "" : "hidden"
                    }`}
                  >
                    {data &&
                      data.filter((item) =>
                          item.address.city
                            .toLowerCase()
                            .startsWith(item.address.city.toLowerCase())
                        )
                        .map((item) => {
                          return (
                            <>
                              <div
                                key={item.id}
                                // onClick={() => handleDropdownOpen(item.address.city)}
                                className="cursor-pointer p-2 text-[10.1px] text-[#787373] ml-auto mr-auto hover:bg-[#f8f7f7]"
                              >
                                <div className="flex items-center gap-3">
                                  <div>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 24 24"
                                      width={15}
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
                                  </div>

                                  <div>
                                    <p>{item.address.city}</p>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                  </div>

                  {/**   */}

                  <div className="absolute inset-y-3 left-0 w-[2px] bg-[#8D8D8D] mx-[9rem] md:z-40 rounded-t-lg rounded-b-lg"></div>
                  <select
                    id="countries"
                    className="border border-none focus:ring-transparent w-[6.5rem] flex-shrink-0 z-10 inline-flex items-center py-2.5 px-2 text-[14px] text-start bg-[#F2F2F2] text-[#787373] mr-[-3rem]"
                  >
                    <option selected>Distance</option>
                    <option value="US">United </option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                  <div className="relative w-full right-[-24%]">
                    <button
                      type="submit"
                      className="absolute min-w-20 text-[13px] font-medium h-full uppercase text-white bg-[#1B7CB9] rounded-[50px] border border-[#1b7cb900] hover:bg-[#336686]"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
         { results &&
                results.map((item) => {
                  return (
                    <>
                      <section
                        key={item.id}
                        className="w-full mb-2 p-6 md:ml-1 ml-0 flex items-center justify-between rounded-[40px] bg-[#F2F2F2] "
                      >
                        <div className="">
                          <ul>
                            <li className="text-md hover:underline mb-2 text-[#8D8D8D] font-medium">
                              <Link to={`${item.contact_url}`}>
                                {item.name}
                                <span className="text-sm "></span>
                              </Link>
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
                              {item.address.address}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <div></div>
                            <p className="text-xs text-[#AAAAAA]">
                              {item.score}
                            </p>
                            <Stack spacing={1}>
                              <Rating
                                readOnly
                                defaultValue={item.reviews_count}
                              />
                            </Stack>
                            <p className="text-[#AAAAAA] text-[12px]">
                              {`(${item.reviews_count})`}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <p className="flex items-center text-sm font-medium ml-1 text-[#78C65A]">
                              {getCurrentSchedule(item.opening_hours)}
                            </p>
                            
                          </div>
                        </div>

                        <div className="flex-col items-center ml-2 ">
                          <button className="p-3 bg-black rounded-full">
                            <img src={icondirectoin} alt="" />
                          </button>
                          <p className="text-[11px] mt-1 text-[#8D8D8D] font-medium">
                            DIRECTIONS
                          </p>
                        </div>
                      </section>

                    </>
                  );
                })}</>
             )}
                <button onClick={ () => handleShowMore()} className="flex items-center ml-auto mr-auto text-lg text-black align-middle">Show more</button>
            </div>
          </div>
        </APIProvider>
     
    </>
  );
}

export default MapList;
