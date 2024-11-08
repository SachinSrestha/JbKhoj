import React from "react";
import Navbar from "./Navbar";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constant.js";
import { toast } from "sonner";
import { setLoading, setUser } from "@/store/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/store.js";
import { Loader2 } from "lucide-react";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        if(res.data.user.role === "student"){
          navigate("/");
        }else{
          navigate("/admin/companies")
        }
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.response);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
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
