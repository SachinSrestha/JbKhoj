import React from "react";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { USER_API_END_POINT } from "../../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { Loader2 } from "lucide-react";
import { setLoading } from "@/store/authSlice.js";
import store from "@/store/store.js";

function SignUp() {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "student",
    file: "",
  });

  const { loading,user } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };
  
  const handleOptionChange = (e) => {
    setInput({ ...input, role: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    
    dispatch(setLoading(true));
    const formData = new FormData();
    formData.append("fullName", input.fullname);
    formData.append("email", input.email);
    formData.append("mobileNumber", input.phoneNumber);
    formData.append("password", input.password);
    formData.append("role", input.role);
    if (input.file) formData.append("file", input.file);

    console.log(formData);
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }finally{
      dispatch(setLoading(false));
    }
  };

  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[])
  return (
    <div>
      <Navbar />
      <div className="border-2 border-gray-200 rounded-md mx-auto max-w-[37rem] mt-8 p-4">
        <form onSubmit={submitHandler}>
          <div className="flex justify-center">
            <h1 className="text-[1.4rem] font-bold">Signup</h1>
          </div>
          <div className="mt-5">
            <label htmlFor="fullname" className="font-medium text-sm">
              Full Name:
            </label>
            <Input
              type="text"
              id="fullname"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Sachin Shrestha"
              className="w-full"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="email" className="font-medium text-sm">
              Email:
            </label>
            <Input
              type="email"
              id="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="example123@gmail.com"
              className="w-full "
            />
          </div>
          <div className="mt-3">
            <label htmlFor="phonenumber" className="font-medium text-sm">
              Phone Number:
            </label>
            <Input
              type="text"
              id="phonenumber"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="9841123456"
              className="w-full"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="font-medium text-sm">
              Password:
            </label>
            <Input
              type="password"
              id="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="Password"
              className="w-full"
            />
          </div>

          <div className="flex justify-between mt-8">
            <RadioGroup className="flex gap-7">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === "student"}
                  onChange={handleOptionChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="student" className="text-[1.01rem]">
                  Student
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === "recruiter"}
                  onChange={handleOptionChange}
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter" className="text-[1.01rem]">
                  Recruiter
                </Label>
              </div>
            </RadioGroup>
            <div className="flex justify-end">
              <Label htmlFor="picture" className="flex items-center mr-2 ">
                Profile
              </Label>
              <Input
                accept="image/*"
                id="picture"
                type="file"
                className="w-2/3 cursor-pointer"
                onChange={changeFileHandler}
              />
            </div>
          </div>

          {loading ? (
            <div className="mx-auto w-full mt-7 mb-4">
              <Button className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600">
                {" "}
                <Loader2 className='mr-1 h-4 w-4 animate-spin' />Please Wait
              </Button>
            </div>
          ) : (
            <div className="mx-auto w-full mt-7 mb-4">
              <Button
                type="submit"
                className="w-full bg-blue-500  hover:bg-blue-400 active:bg-blue-600"
              >
                Submit
              </Button>
            </div>
          )}

          <span>
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
