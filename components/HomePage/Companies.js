import React from "react";
import CompaniesData from "../../data/Companies.json";

function Companies() {
  return (
    <div className="my-[35px] lg:max-w-full max-w-sm mx-auto">
      <div className="mb-10">
        <h4 className="text-[16px] text-secondary font-medium text-center">
          Join 4,000+ companies already growing
        </h4>
      </div>
      <div className="grid gap-7 grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center place-items-center">
        { CompaniesData.map((company) => 
          <img key={company.id} src={company.image} title={company.name} alt={company.name} />
        )
        }
      </div>
    </div>
  );
}

export default Companies;
