import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import axios from "axios";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { USER_API_END_POINT } from "../../utils/constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/store/authSlice";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

function UpdateProfileDialog({ open, setOpen }) {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    fullName: user?.fullName || "",
    email: user?.email || "",
    mobileNumber: user?.mobileNumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.map((skill) => skill) || "",
    file: user?.profile?.resume || "",
  });

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
    formData.append("fullName", input.fullName);
    formData.append("email", input.email);
    formData.append("mobileNumber", input.mobileNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) formData.append("file", input.file);

    try {
      const res = await axios.put(
        `${USER_API_END_POINT}/updateprofile`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="max-w-[490px] [&>button]:hidden"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader button="">
            <DialogTitle>Update Profile</DialogTitle>
            <DialogDescription>
            Make changes to your profile here. Click update when you're done.
            </DialogDescription>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </DialogHeader>
          <form className="pr-2" onSubmit={submitHandler}>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="fullName" className="w-20 text-right">
                Name:
              </Label>
              <Input
                id="fullName"
                name="fullName"
                type="text"
                value={input.fullName}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="email" className="w-20 text-right">
                Email:
              </Label>
              <Input
                id="email"
                name="email"
                className="max-w-sm"
                value={input.email}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="mobileNumber" className="w-20 text-right">
                Number:
              </Label>
              <Input
                id="mobileNumber"
                name="mobileNumber"
                className="max-w-sm"
                value={input.mobileNumber}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="bio" className="w-20 text-right">
                Bio:
              </Label>
              <Input
                id="bio"
                name="bio"
                className="max-w-sm"
                value={input.bio}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="skills" className="w-20 text-right">
                Skills:
              </Label>
              <Input
                id="skills"
                name="skills"
                className="max-w-sm"
                value={input.skills}
                onChange={changeEventHandler}
              />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="name" className="w-20 text-right">
                Resume:
              </Label>
              <Input
                id="file"
                name="file"
                type="file"
                accept="application/pdf"
                className="max-w-sm cursor-pointer"
                onChange={changeFileHandler}
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
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
