import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { COMPANY_API_END_POINT } from "../utils/constant.js";
import { ArrowLeft, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCompany } from "@/store/companySlice.js";
import { toast } from "sonner";

function AdminCompanySetup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: "",
  });
  const [loading, setLoading] = useState(false);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) formData.append("file", input.file);

    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setCompany(res.data.company));
        navigate("/admin/companies");
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
      <div className="max-w-xl mx-auto my-10">
        <div className=" rounded-lg shadow-lg border-[1px] border-gray-200">
          <form onSubmit={submitHandler}>
            <div className="ml-6 mt-5 ">
              <Button variant="ghost" className="text-gray-500 font-semibold">
                <ArrowLeft className="w-9" />
                <span>Back</span>
              </Button>
              <span className="text-xl font-bold ml-6">Company Setup</span>
            </div>
            <div className="grid grid-cols-2 ml-7 pb-8 mt-7 ">
              <div>
                <Label>Company Name</Label>
                <Input
                  className="w-56 "
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                />
              </div>
              <div>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  className="w-60 "
                  value={input.description}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-5">
                <Label>Website</Label>
                <Input
                  className="w-56 "
                  type="text"
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-5">
                <Label>Location</Label>
                <Input
                  className="w-60 "
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-5">
                <Label>Logo</Label>
                <Input
                  className="w-56 pt-[6px] cursor-pointer"
                  type="file"
                  accept="image/*"
                  name="file"
                  onChange={changeFileHandler}
                />
              </div>
            </div>
            {loading ? (
              <div className="mx-auto w-full mt-7 mb-4">
                <Button className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600">
                  {" "}
                  <Loader2 className="mr-1 h-4 w-4 animate-spin" />
                  Please Wait
                </Button>
              </div>
            ) : (
              <Button
                className="bg-blue-600 hover:bg-blue-500 active:bg-blue-700 w-[548px] mx-7 mb-8"
                type="submit"
              >
                Create
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminCompanySetup;
