import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JOB_API_END_POINT } from "../utils/constant.js";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import useGetAllCompanies from "@/hooks/useGetAllCompanies";
import { toast } from "sonner";
import axios from "axios";
import { setAllAdminJobs } from "@/store/jobslice";

function AdminJobCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useGetAllCompanies();
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "0",
    companyId:""
  });
  const [loading, setLoading] = useState(false);
  const { allCompanies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const selectChangeHandler =(value)=>{
    const selectedCompany = allCompanies.find((company)=> company?.name.toLowerCase() === value)
    setInput({...input, companyId: selectedCompany._id})
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/admin/jobs");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[510px] mx-auto my-2">
        <div className=" rounded-lg shadow-lg border-[1px] border-gray-200 pr-6 pb-7">
          <form onSubmit={submitHandler}>
            <div className="ml-1 mt-4 ">
              <Button
                variant="ghost"
                className="text-gray-500 font-semibold"
                onClick={() => navigate("/admin/jobs")}
              >
                <ArrowLeft className="w-9" />
                <span>Back</span>
              </Button>
              <span className="text-xl font-bold ml-16 my-auto">
                Create A Job
              </span>
            </div>
            <div className="grid grid-cols-2 ml-7 pb-6 mt-5 ">
              <div>
                <Label>Title</Label>
                <Input
                  className="w-48 focus-visible:ring-offset-0 focus-visible:ring-0 "
                  type="text"
                  name="title"
                  value={input.title}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  className="w-52 focus-visible:ring-offset-0 focus-visible:ring-0"
                  value={input.description}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Requirements</Label>
                <Input
                  className="w-48 focus-visible:ring-offset-0 focus-visible:ring-0"
                  type="text"
                  name="requirements"
                  value={input.requirements}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>
                  Salary <span className="text-gray-500 text-sm">(in LPA)</span>
                </Label>
                <Input
                  className="w-52 focus-visible:ring-offset-0 focus-visible:ring-0"
                  type="text"
                  name="salary"
                  value={input.salary}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Location</Label>
                <Input
                  className="w-48 focus-visible:ring-offset-0 focus-visible:ring-0"
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Job Type</Label>
                <Input
                  className="w-52 focus-visible:ring-offset-0 focus-visible:ring-0"
                  type="text"
                  name="jobType"
                  value={input.jobType}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>
                  Experience Level{" "}
                  <span className="text-gray-500 text-sm">(in years)</span>
                </Label>
                <Input
                  className="w-48 focus-visible:ring-offset-0 focus-visible:ring-0"
                  type="text"
                  name="experience"
                  value={input.experience}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>No of positions</Label>
                <Input
                  className="w-52 focus-visible:ring-offset-0 focus-visible:ring-0"
                  type="text"
                  name="position"
                  value={input.position}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Company</Label>

                <Select onValueChange={selectChangeHandler} >
                  <SelectTrigger className="w-[180px] focus:outline-none focus:ring-0 focus:border-none">
                    <SelectValue placeholder="Select a company" />
                  </SelectTrigger>
                  <SelectContent>
                    {allCompanies?.length <= 0 ? (
                      <SelectItem >
                        No Company Registered
                      </SelectItem>
                    ) : (
                      allCompanies?.map((company, index) => {
                        return (
                          <SelectItem
                            value={company?.name?.toLowerCase()}
                            key={company._id}
                          >
                            {company?.name}
                          </SelectItem>
                        );
                      })
                    )}
                  </SelectContent>
                </Select>
              </div>
            </div>
            {loading ? (
              <div className="mx-auto w-full mt-7">
                <Button className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600">
                  {" "}
                  <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              </div>
            ) : (
              <Button
                className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 w-[450px] mx-7 "
                type="submit"
              >
                Create
              </Button>
            )}
            {
              allCompanies.length <=0 ? <p className="text-red-500 text-[13px] font-bold mt-2 text-center">Please register a company before creating a job</p> : null
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminJobCreate;
