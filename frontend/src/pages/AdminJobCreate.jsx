import Navbar from "@/components/shared/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";

function AdminJobCreate() {
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

  return (
    <div>
      <Navbar />
      <div className="max-w-[510px] mx-auto my-4">
        <div className=" rounded-lg shadow-lg border-[1px] border-gray-200 pr-6">
          <form onSubmit>
            <div className="ml-1 mt-5 ">
              <Button
                variant="ghost"
                className="text-gray-500 font-semibold"
                onClick={() => navigate("/admin/companies/create")}
              >
                <ArrowLeft className="w-9" />
                <span>Back</span>
              </Button>
              <span className="text-xl font-bold ml-16 my-auto">Create A Job</span>
            </div>
            <div className="grid grid-cols-2 ml-7 pb-7 mt-6 ">
              <div>
                <Label>Title</Label>
                <Input
                  className="w-48 "
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
                  className="w-52 "
                  value={input.description}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Requirements</Label>
                <Input
                  className="w-48 "
                  type="text"
                  name="website"
                  value={input.website}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Salary <span className="text-gray-500 text-sm">(in LPA)</span></Label>
                <Input
                  className="w-52"
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Location</Label>
                <Input
                  className="w-48 "
                  type="text"
                  name="file"
                />
              </div>
              <div className="mt-3">
                <Label>Job Type</Label>
                <Input
                  className="w-52"
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Experience Level <span className="text-gray-500 text-sm">(in years)</span></Label>
                <Input
                  className="w-48"
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>No of positions</Label>
                <Input
                  className="w-52"
                  type="Number"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
                />
              </div>
              <div className="mt-3">
                <Label>Location</Label>
                <Input
                  className="w-48"
                  type="text"
                  name="location"
                  value={input.location}
                  onChange={changeEventHandler}
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

export default AdminJobCreate;
