import React from "react";
// import Logospace from "../components/Logospace";
import HeaderDesktop from "../components/HeaderDesktop";
import MapList from "../components/MapList";
// import HeaderMobile from "../components/HeaderMobile";

function MapRender() {
  return (
    <>
      <div className="h-screen md:mt-1 md:w-11/12 lg:w-[1240px] lg:ml-auto lg:mr-auto  md:ml-6 md:mr-6 ">
        <div className="">
          {/* <Logospace /> */}
        </div>

        <div className="">
          <HeaderDesktop />
        </div>

        {/* <div className="bolck lg:hidden md:hidden ">
          <HeaderMobile />
        </div> */}
        <MapList  />
      </div>

      {/** map render section */}

      
      



    </>
  );
}

export default MapRender;
