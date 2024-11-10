import React from "react";
import { Button } from "../ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";

function Job({ job }) {
  const navigate = useNavigate();

  const daysAgoFunction = (mongodbtime) => {
    const createdAt = new Date(mongodbtime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };
  return (
    <div className="max-w-96 outline-none shadow-xl p-5 border-2 border-slate-100 rounded-lg cursor-pointer bg-white">
      <div className="flex justify-between">
        <p className="text-sm text-slate-500 mt-2">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : daysAgoFunction(job?.createdAt)<31 ?  `${daysAgoFunction(job?.createdAt)} days ago` 
            : `${Math.floor(daysAgoFunction(job?.createdAt)/30)} month ago`
          }
        </p>
        <Button
          variant="outline"
          className="rounded-full active:bg-gray-200"
          size="icon"
        >
          {" "}
          <Bookmark />
        </Button>
      </div>
      <div className="flex ">
        <Button className="p-6 " variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div className="ml-2">
          <h4 className="text-lg font-medium">{job?.company?.name}</h4>
          <p className="text-slate-500 text-sm ">{job?.location}</p>
        </div>
      </div>
      <p className="text-lg font-bold mt-2">{job?.title}</p>
      <p className="flex justify-center mt-2 text-gray-600 mb-4 text-sm">
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
  );
}

export default Job;
