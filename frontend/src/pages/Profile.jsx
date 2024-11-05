import Navbar from "@/components/shared/Navbar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

const skillsArray=[1,2,3,4];

function Profile() {
  return (
    <div>
      <Navbar />
      <div className="rounded-lg shadow-xl p-8 max-w-3xl mx-auto border-[1px] border-slate-200 mt-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="cursor-pointer size-[90px] ">
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
            <div>
              <h1 className="text-xl font-medium">Sachin Shrestha</h1>
              <p className="">Experienced Software Developer</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="rounded-md active:bg-gray-200 text-right"
          >
            <Pen />
          </Button>
        </div>
        <div className="flex mt-5 gap-x-3 items-center">
            <Mail className="size-5"/>
            <p >sachinstha123@gmail.com</p>
        </div>
        <div className="flex mt-2 gap-x-3 items-center">
            <Contact className="size-5"/>
            <p>9841123456</p>
        </div>

        <h1 className="mt-6 font-bold">Skills</h1>
        <div className="flex flex-wrap gap-x-2 mt-1 ">

        {
            skillsArray.map((skill,index) =>(
                <Badge className="bg-black text-white text-xs py-0.5" key={index}>Nextjs</Badge>
            ))
        }
        </div>
        <h1 className="mt-5 font-bold">Resume</h1>
      </div>
    </div>
  );
}

export default Profile;
