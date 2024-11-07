import React, { useState } from "react";
import { Button } from "../ui/button";
import { useParams } from "react-router-dom";
import useGetJob from "@/hooks/useGetJob";
import { useSelector } from "react-redux";
import { Loader2 } from "lucide-react";

function JobDescription() {
  const { loading } = useSelector((store) => store.job);
  const {user}= useSelector(store => store.auth);
  const { singleJob } = useSelector((store) => store.job);
  const isApplied = singleJob?.applications?.some(application => String(application.applicant) === String(user?._id))
  const params = useParams();
  const jobId = params.id;
  useGetJob(jobId);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
        <div className="flex items-center space-x-2">
          <Loader2 className="w-8 h-8 text-gray-600 animate-spin" />
          <span className="text-gray-600 font-medium text-lg">Loading...</span>
        </div>
      </div>
      ) : (
        <div className="max-w-7xl mx-auto mt-14">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{singleJob?.title}</h1>
            <Button
              disabled={isApplied}
              className={
                isApplied
                  ? `bg-gray-600 cursor-not-allowed`
                  : `bg-purple-800 hover:bg-purple-700 active:bg-purple-900`
              }
            >
              {isApplied ? "Already Applied" : "Apply Now"}
            </Button>
          </div>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-blue-800">
            {singleJob?.position} Positions
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-orange-600">
            {singleJob?.jobType}
          </span>
          <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-[13px] font-bold text-purple-800">
            {singleJob?.salary} LPA
          </span>
          <h3 className="mt-8 font-medium text-lg">Job Description</h3>
          <div className="border-t-2 border-gray-300 mt-2 pt-4">
            <p className="font-bold my-1">
              Role:{" "}
              <span className="font-normal text-gray-800 pl-3">
                {singleJob?.title}
              </span>
            </p>
            <p className="font-bold my-1">
              Location:{" "}
              <span className="font-normal text-gray-800 pl-3">
                {singleJob?.location}
              </span>
            </p>
            <p className="font-bold my-1">
              Description:{" "}
              <span className="font-normal text-gray-800 pl-3">
                {singleJob?.description}
              </span>
            </p>
            <p className="font-bold my-1">
              Experience:{" "}
              <span className="font-normal text-gray-800 pl-3">
                {singleJob?.experience} years
              </span>
            </p>
            <p className="font-bold my-1">
              Salary:{" "}
              <span className="font-normal text-gray-800 pl-3">
                {singleJob?.salary} LPA
              </span>
            </p>
            <p className="font-bold my-1">
              Total Applicants:{" "}
              <span className="font-normal text-gray-800 pl-3">{singleJob?.applications.length}</span>
            </p>
            <p className="font-bold my-1">
              Posted Date:{" "}
              <span className="font-normal text-gray-800 pl-3">{singleJob?.createdAt?.split("T")[0]}</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default JobDescription;
