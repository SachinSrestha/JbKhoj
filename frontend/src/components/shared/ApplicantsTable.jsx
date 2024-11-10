import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";

const statusChoices = ["Accepted", "Rejected"];

function ApplicantsTable() {
  const { allApplicants } = useSelector((store) => store.application);
  const [statusClicked, setStatusClicked] = useState("Accepted");
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleStatusClick = (status) => {
    setPopoverOpen(false);
  };
  const getBadgeColor = (status) => {
    switch (status) {
      case "Accepted":
        return "bg-blue-500 text-white";
      case "Rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-black-100 text-white";
    }
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of applicants for this job.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Applicant Name</TableHead>
            <TableHead className="w-[300px]">Email</TableHead>
            <TableHead className="w-[210px] ">Contact</TableHead>
            <TableHead className="w-[270px] ">Resume</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="text-right w-[130px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allApplicants.applications?.length <= 0 ? (
            <span>No applicants for this job</span>
          ) : (
            allApplicants.applications?.map((application) => (
              <TableRow>
                <TableCell>{application?.applicant?.fullName}</TableCell>
                <TableCell>{application?.applicant?.email}</TableCell>
                <TableCell>{application?.applicant?.mobileNumber}</TableCell>
                <TableCell>
                  <a
                    target="_blank"
                    href={application?.applicant?.profile?.resume}
                    className="text-blue-800 hover:underline cursor-pointer"
                  >
                    {application?.applicant?.profile?.resumeOriginalName}
                  </a>
                </TableCell>
                <TableCell>{application?.applicant?.createdAt?.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
                    <PopoverTrigger>
                      <Badge
                        variant="outline"
                        className={`text-sm cursor-pointer ${getBadgeColor(
                          statusClicked
                        )} gap-x-1`}
                      >
                        {statusClicked}
                        <ChevronDown size="18" />
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-32 p-0">
                      {statusChoices.map((status, index) => (
                        <div
                          key={index}
                          className=" cursor-pointer py-2 text-center hover:bg-gray-100 active:bg-gray-200"
                          onClick={() => {
                            handleStatusClick(status);
                            setStatusClicked(status);
                          }}
                        >
                          <span>{status}</span>
                        </div>
                      ))}
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

export default ApplicantsTable;
