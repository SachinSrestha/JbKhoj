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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useSelector } from "react-redux";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import useGetApplicants from "@/hooks/useGetApplicants";
import { useParams } from "react-router-dom";

const statusChoices = ["accepted", "rejected"];

function ApplicantsTable() {
  const { allApplicants } = useSelector((store) => store.application);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [applicantStatuses, setApplicantStatuses] = useState({});
  

  const handleStatusClick = (status) => {
    setPopoverOpen(false);
  };

  useEffect(() => {
    const initialStatuses = {};
    allApplicants?.applications?.forEach((application) => {
      initialStatuses[application._id] = application.status || "Pending"; 
    setApplicantStatuses(initialStatuses);
  })}, [allApplicants]);

  const statusHandler = async (status, id) => {
    try {
      const res = await axios.put(
        `${APPLICATION_API_END_POINT}/updatestatus/${id}`,
        { status },
        { withCredentials: true }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        setApplicantStatuses((prevStatuses) => ({
          ...prevStatuses,
          [id]: status,
        }));
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

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
        <TableCaption>A list of applicants for this job.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Applicant Name</TableHead>
            <TableHead className="w-[300px]">Email</TableHead>
            <TableHead className="w-[210px]">Contact</TableHead>
            <TableHead className="w-[270px]">Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right w-[130px]">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allApplicants.applications?.length <= 0 ? (
            <span>No applicants for this job</span>
          ) : (
            allApplicants.applications?.map((application) => (
              <TableRow key={application._id}>
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
                <TableCell>
                  {application?.applicant?.createdAt?.split("T")[0]}
                </TableCell>
                <TableCell className="text-right">
                  <Popover open={popoverOpen} onOpenChange={setPopoverOpen}> 
                    <PopoverTrigger>
                      <Badge
                        variant="outline"
                        className={`text-sm cursor-pointer ${getBadgeColor(
                          applicantStatuses[application._id] || "PENDING"
                        )} gap-x-1`}
                      >
                        {applicantStatuses[application._id]?.toUpperCase() || "PENDING"}
                        <ChevronDown size="18" />
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent className="w-32 p-0">
                      {statusChoices.map((status, index) => (
                        <div
                          key={index}
                          className="cursor-pointer py-2 text-center hover:bg-gray-100 active:bg-gray-200"
                          onClick={() => {
                            statusHandler(status, application._id);
                            handleStatusClick(status);
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
export default ApplicantsTable
