import React from 'react';

const Subscribe = () => {
    return (

        <div className="py-12 px-2 my-28 subscribe-background rounded-2xl">
            <div className="grid justify-items-center">
                <h1 className="lg:text-[36px] text-[25px] font-semibold leading-[44px] mb-3">Get updates, tutorials &amp; More</h1>
                <p className="text-secondary text-[14px] lg:text-[20px]">Sign up to our newsletter and recive a 5% Discount code</p>
                <div className="lg:flex lg:justify-start lg:mt-[10px]">
                    <div className="lg:mr-4 lg:mb-0 mb-2">
                        <input
                            className="input-box mt-[32px] lg:mt-0 rounded-lg input-shadow"
                            type="text"
                            placeholder="Enter your email"
                        />
                        <p className="text-[14px] text-secondary leading-[20px]  ">
                            We care about your data in our&nbsp;
                            <span className="underline cursor-pointer">privacy policy</span>
                        </p>
                    </div>
                    <div>
                        <button className="btn mt-[2px] lg:mt-0 lg:w-[128px]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Subscribe;