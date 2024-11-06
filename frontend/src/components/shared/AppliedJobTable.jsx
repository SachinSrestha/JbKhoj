import React from "react";
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

const appliedJobList = [1, 2, 3, 4];

function AppliedJobTable() {
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
        <TableBody >
          {appliedJobList.map((job, index) => (
            <TableRow key={index}>
              <TableCell>2024-08-03</TableCell>
              <TableCell>FrontEnd Developer</TableCell>
              <TableCell>Google Inc.</TableCell>
              <TableCell className="text-right"><Badge>SELECTED</Badge> </TableCell>
              </TableRow>
          ))}
          </TableBody>
      </Table>
    </div>
  );
}

export default AppliedJobTable;
