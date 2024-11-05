import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LogOut, User2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/authSlice";



function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout =()=>{
    dispatch(setUser(null));
    navigate("/login");
  }
  const {user} = useSelector(store => store.auth);
  return (
    <div className="bg-white">
      <div className=" flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold text-red-400">
            Job<span className="text-blue-600">Khoj</span>
          </h1>
        </div>
        <div className="flex gap-14">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>{" "}
            </li>
            <li>
              <Link to="/browse">Browse</Link>{" "}
            </li>
          </ul>

          {!user ? (
            <div className="space-x-2">
              <Link to="/login"><Button className="bg-blue-600 hover:bg-blue-500">Login</Button></Link>
              <Link to="/signup"><Button className="bg-red-500 hover:bg-red-400">Signup</Button></Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="flex gap-2 items-center ">
                  <Avatar className="cursor-pointer size-9">
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className=" text-base font-medium">Sachin Shrestha</h4>
                    <p className="text-sm text-muted-foreground">
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
                <div className="flex flex-col text-gray-600 mt-3">
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <User2 />
                    <Button variant="link" > <Link to="/profile">View Profile</Link></Button>
                  </div>
                  <div className="flex w-fit items-center gap-2 cursor-pointer">
                    <LogOut />
                    <Button variant="link" onClick ={logout}>Logout</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
