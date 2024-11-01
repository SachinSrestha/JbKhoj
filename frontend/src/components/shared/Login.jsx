import React from "react";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <Navbar />
      <div className="border-2 border-gray-200 rounded-md mx-auto max-w-[37rem] mt-12 p-4">
        <form onSubmit={submitHandler}>
          <div className="flex justify-center">
            <h1 className="text-[1.4rem] font-bold ">Login</h1>
          </div>
          <div className="mt-5">
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
          <div className="mt-5">
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

          <div className="mx-auto w-full mt-8 mb-4">
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600"
            >
              Submit
            </Button>
          </div>
          <span>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500">
              SignUp
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
