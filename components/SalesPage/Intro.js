import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="bg-whitesmoke">
      <div className="container">
        <div className="md:px-5 lg:max-w-full max-w-sm mx-auto pb-10 grid lg:grid-cols-2 grid-cols-1 lg:py-20">
          <div>
            <h1 className="text-[36px] font-semibold pt-10 ">
              Saasolio Landing Page
            </h1>
            <p className="text-secondary mt-5">
              Mo money, no problems. Untitled is a next-generation financial
              technology company in the process of reinventing banking. 30-day
              free trial.
            </p>
            <div className="flex flex-col md:flex-row mt-16">
              <div className="group">
                <button className="btn flex text-secondary group-hover:bg-primary group-hover:text-white bg-white w-full md:w-[183px] justify-center items-center ring-[#D0D5DD]">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-secondary group-hover:stroke-white mr-3"
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
              <button className="btn my-5 md:m-0 md:ml-4 md:w-[183px]">
                Purchase $10
              </button>
            </div>
          </div>
          <div className="lg:justify-end md:mt-16 lg:mt-0">
            <img
              className="w-full md:w-[600px] mt-4"
              src="/Images/Card/saasolio.png"
              alt="hero-side"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
