import React from "react";
import Image from "next/image";
import PurchaseCard from "./PurchaseCard";
import ProductSlider from "./ProductSlider";

const Purchase = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between justify-center my-20 gap-10">
      <div className="">
        <div className="text-secondary md:text-[18px] text-[14px] text-justify lg:text-left lg:my-20 lg:max-w-full max-w-sm mx-auto">
          <p className="mb-3">
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi&nbsp;
            <span className="text-secondary underline">
              bibendum diam
            </span>
            . Tempor integer aliquam in vitae malesuada fringilla.
          </p>
          <p className="mb-3">
            Elit nisi in eleifend sed nisi. Pulvinar at orci, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat <u>auctor aliquam.</u> Risus, volutpat vulputate posuere purus sit congue convallis aliquet. Arcu id augue ut feugiat donec porttitor neque. Mauris, neque ultricies eu vestibulum, bibendum quam lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra, porttitor.
          </p>
          <p className="mb-3">
            Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.
          </p>
        </div>
        <div>
          <ProductSlider />
        </div>
      </div>
      <div className=" my-5 mt-10 lg:mt-20">
        <div className="md:w-[470px] sm:w-[80vw] mx-auto">
          <div className="flex justify-center lg:justify-start">
            <span className="mr-4 px-2 py-2 rounded-full bg-[#F8F9FC]">
              <Image
                width={18}
                height={16}
                src="/Images/Sales/tailwind.svg"
                alt="tailwind"
              />&nbsp;
              Tailwind CSS
            </span>
            <span className="mr-4 px-2 py-2 rounded-full bg-[#F8F9FC]">
              <Image
                width={18}
                height={16}
                src="/Images/Sales/html.svg"
                alt="html"
              />&nbsp;
              HTML5
            </span>
          </div>
          <div>
            <PurchaseCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
