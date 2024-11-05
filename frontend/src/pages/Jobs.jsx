import FilterCard from "@/components/shared/FilterCard";
import Job from "@/components/shared/Job";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const jobsArray = [1,2,3,4,5,6,7,8];

function Jobs() {
  return (
    <div>
      <Navbar />
      <div className=" bg-[#f0f2f4]">
        <div className="flex max-w-7xl mx-auto">

        <div className="p-4 bg-white rounded-lg my-5 min-w-[270px] max-h-fit ">
          <FilterCard />
        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-4 ml-8 rounded-sm my-5 ">
          {
          jobsArray.length<=0 ? <span>No Jobs Found!</span>:(
          jobsArray.map((item, index) => (
              <div key={index}>
              <Job />
            </div>
          )))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Jobs;
