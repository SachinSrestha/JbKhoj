import CompaniesTable from "@/components/shared/CompaniesTable";
import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminCompanies() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-12">
        <div className="flex justify-between">
          <Input className="w-48" placeholder="Filter by name" />
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
