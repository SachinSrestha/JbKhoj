import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useState } from "react";
import AppliedJobTable from "@/components/shared/AppliedJobTable";
import UpdateProfileDialog from "@/components/shared/UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

function Profile() {
  useGetAppliedJobs();
  const [open, setOpen]= useState(false);
  const {user} = useSelector(store => store.auth)
  let isResume = false;
  if(user.profile.resume){
    isResume = true;
  }else{
    isResume=false;
  }
  const skillsArray =user.profile.skills.map(skill=>skill)
  const navigate = useNavigate();
  const { isFirstTime} = useSelector((store) => store.auth);
  useEffect(() => {
    if (user === null && isFirstTime) {
      navigate("/login");

    }
  }, [user]);
  return (
    <div>
      <Navbar />
      <div className="rounded-lg p-8 max-w-3xl mx-auto border-[1px] border-slate-200 mt-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="cursor-pointer size-[90px] ">
              <AvatarImage src={user.profile.profilePhoto || "https://github.com/shadcn.png"}/>
            </Avatar>
            <div>
              <h1 className="text-xl font-medium">{user.fullName}</h1>
              <p className="">{user.profile.bio }</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-md active:bg-gray-200 text-right"
            onClick={(()=> setOpen(true))}
          >
            <Pen />
          </Button>
        </div>
        <div className="flex mt-5 gap-x-3 items-center">
            <Mail className="size-5"/>
            <p >{user.email}</p>
        </div>
        <div className="flex mt-2 gap-x-3 items-center">
            <Contact className="size-5"/>
            <p>{user.mobileNumber}</p>
        </div>

        <h1 className="mt-6 font-bold">Skills</h1>
        <div className="flex flex-wrap gap-x-2 mt-1 ">

        {
          skillsArray.length <=0? <h1 className="text-base ">No Skills Added</h1>:
            skillsArray.map((skill,index) =>(
                <Badge className="bg-black text-white text-[13px] py-0.5" key={index}>{skill.toUpperCase()}</Badge>
            ))
        }
        </div>
        <h1 className="mt-5 font-bold">Resume</h1>
        <div className="mt-[7px] ">
          { 
            isResume? <a target="_blank" href={user.profile.resume} className="text-blue-500 hover:underline cursor-pointer">{user?.profile?.resumeOriginalName}</a> : <span>No Resume</span>
          }
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-12">
        <h1 className="text-xl font-bold ml-4">Applied Jobs</h1>
        <div className="rounded-lg max-w-3xl mx-auto border-[1px] border-slate-200 mt-5">
          <AppliedJobTable/>
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
}

export default Profile;
