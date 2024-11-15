import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, Eye, MoreHorizontal } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetAllAdminJobs from "@/hooks/useGetAllAdminJobs";

function JobsTable() {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filteredJobName } = useSelector((store) => store.job);
  const { allAdminJobs } = useSelector((store) => store.job);

  const [filterJob, setFilterJob] = useState(allAdminJobs);

  useEffect(() => {
    const filteredJob =
      allAdminJobs?.length >= 0 &&
      allAdminJobs?.filter((job) => {
        if (!filteredJobName) {
          return true;
        } else {
          return (
            job?.title?.toLowerCase().includes(filteredJobName.toLowerCase()) ||
            job?.company?.name
              .toLowerCase()
              .includes(filteredJobName.toLowerCase())
          );
        }
      });
    setFilterJob(filteredJob);
  }, [allAdminJobs, filteredJobName]);
  return (
    <div>
      <Table>
        <TableCaption>A list of your recently created jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[275px]">Company Name</TableHead>
            <TableHead className="w-[335px]">Role</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminJobs?.length <= 0 ? (
            <span>You haven't registered any jobs yet.</span>
          ) : filterJob?.length <= 0 ? (
            <span>No Jobs Found</span>
          ) : (
            filterJob?.map((job, index) => (
              <TableRow key={index}>
                <TableCell>{job?.company?.name}</TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32 ">
                      <div
                        className="flex items-center gap-3  w-fit cursor-pointer"
                        onClick={() => {
                          navigate(`/admin/jobs/edit/${job?._id}`);
                          dispatch(setEditCompany(company));
                        }}
                      >
      
                      </div>
                      <div
                        className="flex items-center gap-2 w-fit cursor-pointer"
                        onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)}
                      >
                        <Eye className="size-5" />
                        <span className="text-base">Applicants</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default JobsTable;
