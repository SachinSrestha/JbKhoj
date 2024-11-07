import React from "react";
import { useSelector } from "react-redux";

function LatestJobs() {
  const { allJobs } = useSelector((store) => store.job);
  return (
    <div className="mb-24 ">
      <h1 className="text-4xl ml-20 font-bold mt-20">
        <span className="text-[#6743b5]">Latest and Top </span> Job Openings
      </h1>
      <div className="flex flex-wrap grid-cols-3 gap-x-4 gap-y-5 ml-20 mt-6 h-auto">
        {allJobs.length <= 0 ? (
          <span>No Jobs Found</span>
        ) : (
          allJobs.slice(0, 6).map((job, index) => (
            <div
              className="max-w-[445px] outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg cursor-pointer"
              key={index}
            >
              <h4 className="text-lg font-medium">{job?.company?.name}</h4>
              <p className="text-slate-500 text-sm ">{job.location}</p>
              <p className="text-lg font-bold mt-2">{job.title}</p>
              <p className="flex justify-center mt-2 text-gray-600 mb-4 text-sm">
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

        {/* <div className="max-w-[445px] outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg ">
          <h4 className="text-lg font-medium">Google</h4>
          <p className="text-slate-500 text-[16px] ">India</p>
          <p className="text-xl font-bold mt-2">FullStack Developer</p>
          <p className="flex justify-center mt-2 text-gray-600 mb-4">
            I need a senior full stack developer, who is able to write efficient
            code for both backend and frontend
          </p>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-blue-800">
            2 Positions
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-orange-600">
            Full Time
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-sm font-bold text-purple-800">
            45 LPA
          </span>
        </div>
        <div className="max-w-[445px] outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg ">
          <h4 className="text-lg font-medium">Microsoft</h4>
          <p className="text-slate-500 text-[16px] ">Nepal</p>
          <p className="text-xl font-bold mt-2">MERN Developer</p>
          <p className="flex justify-center mt-2 text-gray-600 mb-4">
            I need a senior MERN developer, who is able to write efficient
            code in MERN stack
          </p>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-blue-800">
            1 Positions
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-orange-600">
            Full Time
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-sm font-bold text-purple-800">
            35 LPA
          </span>
        </div>
        <div className="max-w-[445px] outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg ">
          <h4 className="text-lg font-medium">Facebook</h4>
          <p className="text-slate-500 text-[16px] ">India</p>
          <p className="text-xl font-bold mt-2">Software Engineer</p>
          <p className="flex justify-center mt-2 text-gray-600 mb-4">
            I need a mid-level software engineer, who is able to manage,create and lead projects.
          </p>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-blue-800">
            2 Positions
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-orange-600">
            Remote
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-sm font-bold text-purple-800">
            30 LPA
          </span>
        </div>
        <div className="max-w-[445px] outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg ">
          <h4 className="text-lg font-medium">Amazon</h4>
          <p className="text-slate-500 text-[16px] ">India</p>
          <p className="text-xl font-bold mt-2">Data Engineer</p>
          <p className="flex justify-center mt-2 text-gray-600 mb-4">
            I need a senior data engineer, who can handle databases efficiently.
          </p>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-blue-800">
            3 Positions
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-orange-600">
            Full Time
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-sm font-bold text-purple-800">
            40 LPA
          </span>
        </div>
        <div className="max-w-[445px] outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg ">
          <h4 className="text-lg font-medium">Daraz</h4>
          <p className="text-slate-500 text-[16px] ">Nepal</p>
          <p className="text-xl font-bold mt-2">MERN Developer</p>
          <p className="flex justify-center mt-2 text-gray-600 mb-4">
            I need a entry level MERN Dveloper, who can create and manage websites in MERN Stack
          </p>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-blue-800">
            1 Positions
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-sm font-bold text-orange-600">
            Full Time
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-sm font-bold text-purple-800">
            20 LPA
          </span>
        </div> */}
      </div>
    </div>
  );
}

export default LatestJobs;
