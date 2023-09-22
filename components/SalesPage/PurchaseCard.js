import React from "react";
import Image from "next/image";

const PurchaseCard = () => {
  return (
    <div className="bg-whitesmoke rounded-lg lg:max-w-lg max-w-sm mx-auto p-10 mt-10">
      <div>
        <h1>
          <span className="lg:text-4xl text-3xl font-bold">$</span>
          <span className="lg:text-5xl text-4xl font-bold mr-2">10</span>
          <span className="text-secondary font-Inter">one-time purchase</span>
        </h1>
        <span className="flex items-center mt-2">
          <span className="mr-1">
            <Image
              className=""
              width={25}
              height={25}
              src="/Images/Sales/download.svg"
              alt="download"
            />
          </span>
          <span className="text-[20px] font-semibold ">11 Downloads</span>
        </span>
        <p className="text-secondary mb-10 mt-2">
          Our most popular plan for small teams.
        </p>
      </div>
      <div>
        <div className="my-3 text-secondary flex items-center">
          <span className="mr-4">
            <Image width={24} height={24} src="/Images/Sales/check.svg" alt="check-icon"/>
          </span>
          <span>100% W3C valid HTML5 files</span>
        </div>
        <div className="my-3 text-secondary flex items-center">
          <span className="mr-4">
            <Image width={24} height={24} src="/Images/Sales/check.svg" alt="check-icon"/>
          </span>
          <span>Lifetime Future Updates</span>
        </div>
        <div className="my-3 text-secondary flex items-center">
          <span className="mr-4">
            <Image width={24} height={24} src="/Images/Sales/check.svg" alt="check-icon"/>
          </span>
          <span>Fully Responsive</span>
        </div>
        <div className="my-3 text-secondary flex items-center">
          <span className="mr-4">
            <Image width={24} height={24} src="/Images/Sales/check.svg" alt="check-icon"/>
          </span>
          <span>Tested for conversion rates</span>
        </div>
        <div className="my-3 text-secondary flex items-center">
          <span className="mr-4">
            <Image width={24} height={24} src="/Images/Sales/check.svg" alt="check-icon"/>
          </span>
          <span>Chat and email support</span>
        </div>
      </div>

      <div className="flex flex-col mt-5">
        <button className="btn my-5 ">Purchase $10</button>
        <div className="group">
          <button className="btn flex text-primary group-hover:bg-primary group-hover:text-white bg-white w-full justify-center items-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-primary group-hover:stroke-white mr-3"
            >
              <path
                d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 7L15 11L9 15V7Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;
