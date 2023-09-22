import React from "react";
import LandingPagesCard from "../Common/LandingPagesCard";

const SimilarLandingPages = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4 lg:max-w-full max-w-sm mx-auto">
        <span className="text-primary font-semibold ">
          Other Pages
        </span>
        <div className="grid justify-items-end">
          <button className="btn w-[153px]">View All Pages</button>
        </div>
      </div>
      <div className="text-center lg:text-left">
        <h1 className="text-[30px] lg:text-[36px] font-semibold leading-[38px] text-jetblack ">
          Similar Landing Pages
        </h1>
        <p className="text-[16px] lg:text-[20px]  text-secondary mt-[20px] mb-2">
          More awesome landing pages
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid lg:gap-7 xl:gap-[50px] 2xl:gap-[30px] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          <LandingPagesCard />
        </div>
      </div>
    </>
  );
};

export default SimilarLandingPages;
