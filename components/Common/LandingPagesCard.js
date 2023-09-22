import React, { useEffect, useState } from "react";
import LandingPagesData from "../../data/LandingPages.json";
import Image from "next/image";

function LandingPagesCard() {
  return (
    <>
      {
        LandingPagesData.map( page =>
          <div key={page.id} className="mb-5">
            <div className="max-w-sm rounded overflow-hidden">
              <img className="w-full" src={page.image} alt={page.title}/>
              <div className="my-5">
                <p className="text-[14px] mb-3 font-semibold text-primary">
                  Last Update - {page.lastUpdate}
                </p>
                <div className="font-bold text-xl mb-2 flex justify-between">
                  <h1 className="text-[20px] font-semibold leading-[24px]">
                    {page.title}
                  </h1>
                  <h1 className="text-[20px] font-semibold leading-[24px]">
                    {page.price}
                  </h1>
                </div>
                <p className="text-secondary text-justify">
                  {page.description}
                </p>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
}

export default LandingPagesCard;