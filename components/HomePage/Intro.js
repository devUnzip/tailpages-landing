import React from "react";
import Image from "next/image";

function Intro() {
  return (
    <>
      <div className="lg:bg-hero-img lg:bg-no-repeat bg-right">
        <div className="flex flex-col lg:flex-row container lg:justify-between lg:h-[600px] ">
          <div className="mt-[58px] ">
            <div className="lg:my-[3vh] lg:max-w-full max-w-sm mx-auto">
              <div className="font-Inter text-[12px] lg:text-[14px] text-primary cursor-pointer w-[262px] lg:w-[290px] p-1 font-medium flex justify-center items-center bg-whitesmoke rounded-full ">
                <span className="mr-2 p-1 rounded-full px-3 bg-white cursor-default ">
                  We&apos;re hiring!
                </span>
                <a href="#" className="mr-2">Join our remote team</a>
                <span className="flex justify-center items-center">
                  <Image width={16} height={16} src="/Images/arrow-right.svg" alt="arrow"/>
                </span>
              </div>
              <h1 className="my-[16px] text-[36px]  lg:text-[60px]  text-jetblack font-semibold leading-[44px] lg:leading-[64px]  ">
                Tailwind Landing <br className="hidden lg:block" /> Page
                Templates
              </h1>
              <h4 className="text-[18px]  lg:text-[20px]  leading-[28px] text-secondary font-Inter">
                Beautifully Crafted landing pages, designed to
                <br className="hidden lg:block" /> help your products stand out
                and convert.
              </h4>
              <div className="lg:flex lg:items-center lg:justify-start lg:mt-[32px]">
                <input
                  className="input-box mt-[32px] lg:mt-3 lg:w-[360px] lg:mr-4"
                  type="text"
                  placeholder="Get Tempalte Updates"
                />

                <button className="btn mt-[16px] lg:mt-0 lg:w-[128px]">
                  Subscribe
                </button>
              </div>
              <p className="text-[14px] text-secondary">
                We care about your data in our&nbsp;
                <span className="underline cursor-pointer">privacy policy</span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="max-w-sm mx-auto mb-[20px] flex justify-center w-full lg:hidden h-[325px] ">
              <img className="w-[100%]" src="/Images/mobile-bg.svg" alt="hero-background"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
