import React from "react";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <Navbar />
      <div className="border-2 border-gray-200 rounded-md mx-auto max-w-[37rem] mt-8 p-4">
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
            placeholder="Password"
            className="w-full"
          />
        </div>

        <div className="flex justify-between mt-8">
          <RadioGroup defaultValue="option-one" className="flex gap-7">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Student" id="option-one" />
              <Label htmlFor="option-one">Student</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Recruiter" id="option-two" />
              <Label htmlFor="option-two">Recruiter</Label>
            </div>
          </RadioGroup>
          <div className="flex justify-end">
            <Label htmlFor="picture" className="flex items-center mr-2 ">
              Profile
            </Label>
            <Input accept="image/*" id="picture" type="file" className="w-2/3 cursor-pointer" />
          </div>
        </div>
        <div className="mx-auto w-full mt-7 mb-4">
          <Button type="submit" className="w-full bg-blue-500  hover:bg-blue-400 active:bg-blue-600">Submit</Button>
        </div>
        <span>
          Already have an account?{" "}{" "}
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignUp;