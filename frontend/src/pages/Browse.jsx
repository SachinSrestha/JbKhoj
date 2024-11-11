import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import { setSearchJobQuery } from "@/store/jobslice";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const randomJobList = [1, 2, 3, 4, 5, 6, 7, 8];

function Browse() {
  const { searchJobQuery } = useSelector((store) => store.job);
  useGetAllJobs(searchJobQuery);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allJobs } = useSelector((store) => store.job);
  const { loading } = useSelector((store) => store.job);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex items-center space-x-2">
            <Loader2 className="w-8 h-8 text-gray-600 animate-spin" />
            <span className="text-gray-600 font-medium text-lg">
              Loading...
            </span>
          </div>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="max-w-7xl mx-auto mt-10">
            <h1 className="text-xl font-bold">
              Search Results ({allJobs.length})
            </h1>
            <div className="grid grid-cols-3 ml-3 mt-10 gap-y-4">
              {allJobs?.length <= 0 ? (
                <span>No Jobs Found</span>
              ) : (
                allJobs.map((job, index) => (
                  <div
                    className="max-w-[425px] outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg cursor-pointer bg-white h-fit"
                    key={index}
                  >
                    <div className="flex ">
                      <Button className="p-6 " variant="outline" size="icon">
                        <Avatar>
                          <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
                        </Avatar>
                      </Button>
                      <div className="ml-2">
                        <h4 className="text-lg font-medium">
                          {job?.company?.name}
                        </h4>
                        <p className="text-slate-500 text-sm ">
                          {job?.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-lg font-bold mt-2">{job?.title}</p>
                    <p className="flex  mt-2 text-gray-600 mb-4 text-sm">
                      {job?.description}
                    </p>
                    <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-blue-800">
                      {job?.position} Positions
                    </span>
                    <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 mr-2 text-[13px] font-bold text-orange-600">
                      {job?.jobType}
                    </span>
                    <span className="border-2 border-gray-200 rounded-full px-3 py-[2px] text-center items-center mt-4 text-[13px] font-bold text-purple-800">
                      {job?.salary} LPA
                    </span>
                    <div className="mt-4 space-x-4">
                      <Button
                        variant="outline"
                        onClick={() => navigate(`/description/${job?._id}`)}
                      >
                        Details
                      </Button>
                      <Button
                        variant="primary"
                        className="bg-purple-800 text-white hover:bg-purple-700 active:bg-purple-900"
                      >
                        Save For Later
                      </Button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Browse;
