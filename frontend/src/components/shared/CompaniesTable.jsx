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
import { Avatar, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import useGetAllCompanies from "../../hooks/useGetAllCompanies";
import { useNavigate } from "react-router-dom";
import { setEditCompany } from "@/store/companySlice";

function CompaniesTable() {
  useGetAllCompanies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { filteredCompanyName } = useSelector((store) => store.company);
  const { allCompanies } = useSelector((store) => store.company);
  const [filterCompany, setFilterCompany] = useState(allCompanies);

  useEffect(() => {
    const filteredCompany =
      allCompanies.length >= 0 &&
      allCompanies.filter((company) => {
        if (!filteredCompanyName) {
          return true;
        } else {
          return company?.name
            ?.toLowerCase()
            .includes(filteredCompanyName.toLowerCase());
        }
      });
    setFilterCompany(filteredCompany);
  }, [allCompanies, filteredCompanyName]);
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
          {allCompanies?.length <= 0 ? (
            <span>You haven't registered any companies yet.</span>
          ) : filterCompany?.length <= 0 ? (
            <span>No Companies Found</span>
          ) : (
            filterCompany?.map((company, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={company?.logo} size="icons" />
                  </Avatar>
                </TableCell>
                <TableCell>{company?.name}</TableCell>
                <TableCell>{company?.createdAt?.split("T")[0]}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="w-32">
                      <div
                        className="flex items-center gap-3 w-fit cursor-pointer"
                        onClick={() => {
                          navigate(`/admin/companies/edit/${company?.name}`);
                          dispatch(setEditCompany(company));
                        }}
                      >
                        <Edit2 className="size-4" />
                        <span className="text-base">Edit</span>
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

export default CompaniesTable;
