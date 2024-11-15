import CompaniesTable from "@/components/shared/CompaniesTable";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { setFilteredCompanyName } from "@/store/companySlice.js";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function AdminCompanies() {
  useGetAllCompanies();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [filterByName, setFilterByName] = useState("");
  const handleChange = (e) => {
    setFilterByName(e.target.value);
  };
  useEffect(()=>{
    dispatch(setFilteredCompanyName(filterByName));
  },[filterByName])
  const { user, isFirstTime } = useSelector((store) => store.auth);
  useEffect(() => {
    if (user === null ) {
      navigate("/login");
    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-12">
        <div className="flex justify-between">
          <Input
            className="w-48 focus:border-black hover:border-gray-900"
            placeholder="Filter by name"
            value={filterByName}
            onChange={handleChange}
          />
          <Button
            className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
            onClick={() => navigate("/admin/companies/create")}
          >
            New Company
          </Button>
        </div>
        <div className="mt-6">
          <CompaniesTable />
        </div>
      </div>
    </div>
  );
}

export default AdminCompanies;
