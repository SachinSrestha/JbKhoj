import FilterCard from "@/components/shared/FilterCard";
import Job from "@/components/shared/Job";
import Navbar from "@/components/shared/Navbar";
import React from "react";
import { useSelector } from "react-redux";

function Jobs() {
  const {allJobs}= useSelector(store=>store.job);
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
          allJobs.length<=0 ? <span>No Jobs Found!</span>:(
          allJobs.map((job, index) => (
              <div key={index}>
              <Job job={job}/>
            </div>
          )))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Jobs;
