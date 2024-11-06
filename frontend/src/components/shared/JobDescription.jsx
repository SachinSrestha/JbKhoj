import React from "react";
import { Button } from "../ui/button";

function JobDescription() {
    const isApplied = false;
  return (
    <div className="max-w-7xl mx-auto mt-14">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">FullStack Developer</h1>
        <Button disabled={isApplied} className={ isApplied ? `bg-gray-600 cursor-not-allowed` : `bg-purple-800 hover:bg-purple-700 active:bg-purple-900`}>{isApplied ? "Already Applied" :"Apply Now"}</Button>
      </div>
        <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-blue-800">
          2 Positions
        </span>
        <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-orange-600">
          Full Time
        </span>
        <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-[13px] font-bold text-purple-800">
          45 LPA
        </span>
        <h3 className="mt-8 font-medium text-lg">Job Description</h3>
        <div className="border-t-2 border-gray-300 mt-2 pt-4">
            <p className="font-bold my-1">Role: <span className="font-normal text-gray-800 pl-3">FullStack Developer</span></p>
            <p className="font-bold my-1">Location: <span className="font-normal text-gray-800 pl-3">Banepa</span></p>
            <p className="font-bold my-1">Description: <span className="font-normal text-gray-800 pl-3">I need a senior full stack developer, who is able to write
            efficient code for both backend and frontend</span></p>
            <p className="font-bold my-1">Experience: <span className="font-normal text-gray-800 pl-3">1</span></p>
            <p className="font-bold my-1">Salary: <span className="font-normal text-gray-800 pl-3">40 LPA</span></p>
            <p className="font-bold my-1">Total Applicants: <span className="font-normal text-gray-800 pl-3">0</span></p>
            <p className="font-bold my-1">Posted Date: <span className="font-normal text-gray-800 pl-3">2024-08-03</span></p>
        </div>
    </div>
  );
}

export default JobDescription;
