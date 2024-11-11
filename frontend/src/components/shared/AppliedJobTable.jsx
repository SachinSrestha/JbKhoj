import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "../ui/badge";
import { useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const appliedJobList = [1, 2, 3, 4];

function AppliedJobTable() {
  const { allAppliedJobs } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

  const getBadgeColor = (status) => {
    switch (status.toLowerCase()) {
      case "accepted":
        return "bg-blue-500 text-white";
      case "rejected":
        return "bg-red-500 text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      default:
        return "bg-black-100 text-white";
    }
  };
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied jobs.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px] ">Date</TableHead>
            <TableHead className="w-[230px] ">Job Role</TableHead>
            <TableHead className="w-[230px] ">Company</TableHead>
            <TableHead className="text-right w-[100px] pr-6">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAppliedJobs?.length <= 0 ? (
            <span>No applied jobs.</span>
          ) : (
            allAppliedJobs?.map((application, index) => (
              <TableRow key={index}>
                <TableCell>
                  {application?.job?.createdAt.split("T")[0]}
                </TableCell>
                <TableCell>{application?.job?.title}</TableCell>
                <TableCell>{application?.job?.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge className={`${getBadgeColor(application?.status)}`}>{application?.status?.toUpperCase()}</Badge>{" "}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobTable;
