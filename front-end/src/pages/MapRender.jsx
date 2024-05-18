import React from "react";
import Logospace from "../components/Logospace";
import HeaderDesktop from "../components/HeaderDesktop";
import HeaderMobile from "../components/HeaderMobile";

function MapRender() {
  return (
    <>
      <div className="h-screen md:mt-11 md:w-11/12 md:ml-10 md:mr-10 ">
        <div className="">
          <Logospace />
        </div>

        <div className="hidden lg:block md:block ">
          <HeaderDesktop />
        </div>

        <div className="bolck lg:hidden md:hidden ">
          <HeaderMobile />
        </div>
      </div>

      {/** map render section */}

      



    </>
  );
}

export default MapRender;
