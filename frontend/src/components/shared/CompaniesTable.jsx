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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";

function CompaniesTable() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent companies.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[275px]">Logo</TableHead>
            <TableHead className="w-[335px]">Name</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <Avatar>
                <AvatarImage
                  src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
                  
                />
              </Avatar>
            </TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>2024-11-07</TableCell>
            <TableCell className="text-right cursor-pointer">
              <Popover>
                <PopoverTrigger><MoreHorizontal/></PopoverTrigger>
                <PopoverContent className="w-32">
                  <div className="flex items-center gap-3 w-fit cursor-pointer">
                    <Edit2 className="size-4"/>
                    <span className="text-base">Edit</span>
                  </div>
                </PopoverContent>
              </Popover>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default CompaniesTable;
