import FilterCard from "@/components/shared/FilterCard";
import Job from "@/components/shared/Job";
import Navbar from "@/components/shared/Navbar";
import useGetAllJobs from "@/hooks/useGetAllJobs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Jobs() {
  useGetAllJobs();
  const { allJobs, filterJobs } = useSelector((store) => store.job);
  const [filteredJobs, setFilteredJobs] = useState(allJobs);
  const parseSalaryRange = (range) => {
    const salaryMapping = {
      "0-40k": [0, 40000],
      "20k-1lakh": [20000, 100000],
      "1lakh-5lakh": [100000, 500000],
    };
    return salaryMapping[range] || [0, Infinity];
  };

  useEffect(() => {
    if (filterJobs) {
      const filteredJobList = allJobs.filter((job) => {
        const isIndustryMatch = filterJobs.Industry
          ? job?.title.toLowerCase().includes(filterJobs.Industry.toLowerCase())
          : true;

        const isLocationMatch = filterJobs.Location
          ? job?.location
              .toLowerCase()
              .includes(filterJobs.Location.toLowerCase())
          : true;

        const isSalaryMatch = filterJobs.Salary
          ? (() => {
              const [minSalary, maxSalary] = parseSalaryRange(
                filterJobs.Salary
              );
              const jobSalary = Math.floor((job.salary * 100000) / 12) || 0;
              return jobSalary >= minSalary && jobSalary <= maxSalary;
            })()
          : true;
        return isIndustryMatch && isLocationMatch && isSalaryMatch;
      });

      setFilteredJobs(filteredJobList);
    } else {
      setFilteredJobs(allJobs);
    }
  }, [filterJobs, allJobs]);
  const navigate = useNavigate();
  const { user } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user === null) {
      navigate("/login");
      toast.error("Session expired!")
    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <div className=" bg-[#f0f2f4]">
        <div className="flex max-w-7xl mx-auto">
          <div className="p-4 bg-white rounded-lg my-3 min-w-[270px] max-h-fit ">
            <FilterCard />
          </div>
          <div className="grid grid-cols-3 gap-x-4 gap-y-4 ml-8 rounded-sm my-5 ">
            {filteredJobs.length <= 0 ? (
              <span>No Jobs Found!</span>
            ) : (
              filteredJobs.map((job, index) => (
                <motion.div 
                initial={{opacity:0,x:100}}
                animate={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                transition={{duration:0.3}}
                key={index}>
                  <Job job={job} />
                </motion.div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;
