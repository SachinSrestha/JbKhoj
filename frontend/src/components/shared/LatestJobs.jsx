import useGetAllJobs from "@/hooks/useGetAllJobs";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LatestJobs() {
 
  const navigate = useNavigate();
  const { allJobs } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="mb-24 ">
      <h1 className="text-4xl ml-20 font-bold mt-20">
        <span className="text-[#6743b5]">Latest and Top </span> Job Openings
      </h1>
      <div className="grid grid-cols-3 gap-x-6 gap-y-5 ml-20 mt-6 h-auto mr-12">
        {allJobs.length <= 0 || user===null? (
          <span className="text-xl font-semibold  text-red-500 mt-3">No Jobs Found</span>
        ) : (
          allJobs.slice(0, 6).map((job) => (
            <div
              className=" outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg cursor-pointer"
              key={job._id} onClick={()=> navigate(`/description/${job?._id}`)}
            >
              <h4 className="text-lg font-medium">{job?.company?.name}</h4>
              <p className="text-slate-500 text-sm ">{job.location}</p>
              <p className="text-lg font-bold mt-2">{job.title}</p>
              <p className="flex  mt-2 text-gray-600 mb-4 text-sm">
                {job.description}
              </p>
              <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-blue-800">
                {job?.position} Positions
              </span>
              <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-orange-600">
                {job?.jobType}
              </span>
              <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-sm font-bold text-purple-800">
                {job?.salary} LPA
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LatestJobs;
