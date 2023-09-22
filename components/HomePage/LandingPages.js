import React from "react";
import LandingPagesCard from "../Common/LandingPagesCard";

function LandingPages() {
  return (
    <div className="lg:mt-[120px] flex flex-col justify-center items-center">
      <div className="text-center lg:mb-[40px]">
        <h1 className="text-[30px] lg:text-[36px] font-semibold leading-[38px] text-jetblack ">
          Tailwind Landing Pages
        </h1>
        <p className="text-[16px] lg:text-[20px]  text-secondary my-[20px] ">
          Our latest landing pages built with Tailwind CSS
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <LandingPagesCard />
      </div>
    </div>
  );
}

export default LandingPages;
