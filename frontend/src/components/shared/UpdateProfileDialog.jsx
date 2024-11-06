import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,

} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function UpdateProfileDialog({ open, setOpen }) {
    const [loading, isLoading] =useState(false);
  return (
    <div>
      <Dialog open={open}>
        <DialogContent
          className="max-w-[490px] [&>button]:hidden"
          onInteractOutside={() => setOpen(false)}
        >
          <DialogHeader button="">
            <DialogTitle>Update Profile</DialogTitle>
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✕
            </button>
          </DialogHeader>
          <form className="pr-2">
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="name" className="w-20 text-right">
                Name:
              </Label>
              <Input id="name" name="name" className="max-w-sm" />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="email" className="w-20 text-right">
                Email:
              </Label>
              <Input id="email" name="email" className="max-w-sm" />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="number" className="w-20 text-right">
                Number:
              </Label>
              <Input id="number" name="number" className="max-w-sm" />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="bio" className="w-20 text-right">
                Bio:
              </Label>
              <Input id="bio" name="bio" className="max-w-sm" />
            </div>
            <div className="flex items-center gap-x-3 pl-4 my-4">
              <Label htmlFor="skills" className="w-20 text-right">
                Skills:
              </Label>
              <Input id="skills" name="skills" className="max-w-sm" />
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
              />
            </div>
          </form>
          {loading ? (
            <div className="mx-auto w-full mt-7 mb-4">
              <Button className="w-full bg-blue-500 hover:bg-blue-400 active:bg-blue-600">
                {" "}
                <Loader2 />{" "}
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
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UpdateProfileDialog;
