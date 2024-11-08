import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminCompanyCreate() {
    const [companyName, setCompanyName] = useState("");
    const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCompanyName(e.target.value); 
  };

  const submitHandler = ()=>{
    if(!companyName){
        setError("Company Name is Required");
    }else{
        navigate("/admin/companies/setup")
    }
  }
  return (
    <div>
      <Navbar />\
      <div className="max-w-[850px] mx-auto">
        <h1 className="text-[27px] mt-8 font-bold text-blue-600">
          Your Company Name
        </h1>
        <p className="text-gray-500">
          Choose your company name here. You can chnage it later.
        </p>

        <div className="mt-10 space-y-2">
          <Label className="text-[16px] ml-2">Company Name</Label>
          <Input
            type="text"
            value={companyName}
            onChange ={handleChange}
            className="max-w-3xl px-4 py-5 text-[17px]  border-2 border-gray-200"
            placeholder="Microsoft, Google, etc."
          />
          {
            error==="" ? null : <p className="text-red-500">{error}</p>
          }
        </div>

        <div className="flex gap-2 mt-8">
          <Button
            variant="outline"
            className="active:bg-gray-200"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700"
            onClick={submitHandler}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminCompanyCreate;
