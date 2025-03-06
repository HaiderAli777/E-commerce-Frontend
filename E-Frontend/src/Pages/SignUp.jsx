import React from "react";
import signin from "../assets/signin.jpg";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import malepic from "../assets/picsig1.jpg";

export default function SignUp() {
  return (
    <>
      <div className="md:mx-5 mt-25 grid-col-1 md:grid grid-cols-3 md:gap-6">
        <div className=" h-[100%]">
          <img src={malepic} className="h-[100%] w-[120%] rounded-2xl"></img>
        </div>
        <div className="col-span-2 text-center py-4 bg-gradient-to-l justify-items-center from-purple-500 md:rounded-4xl">
          <div className="mt-2 bg-purple-100 backdrop-blur-3xl w-80 md:w-[60%]   py-10 rounded-4xl hover:shadow-2xl hover:shadow-purple-950">
            <div className="mb-5">
              <h1 className="text-6xl text-purple-800 font-medium font-serif ">
                <span className=" text-2xl font-bold text-purple-400">
                  ____
                </span>
                SignUp
                <span className=" text-2xl font-bold text-purple-400">
                  ____
                </span>
              </h1>
            </div>

            <div className="justify-items-center px-2 space-y-7">
            <div className="grid w-full max-w-sm items-center gap-1.5">
               <div className="bg-amber-300 w-24 h-24 mx-auto rounded-full">
                <img src={profile} className="rounded-full"></img>
               </div>
               <h1  className="text-purple-800 font-bold">Profile Picture</h1>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Username"
                  className="border-purple-800 hidden"
                />
              </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-left text-purple-800 font-bold"
                >
                  Username
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Enter Username"
                  className="border-purple-800"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="email"
                  className="text-left text-purple-800 font-bold"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="border-purple-800"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="password"
                  className="text-left  text-purple-800 font-bold"
                >
                  Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  className="border-purple-800"
                />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label
                  htmlFor="password"
                  className="text-left  text-purple-800 font-bold"
                >
                  Confirm Password
                </Label>
                <Input
                  type="password"
                  id="password"
                  placeholder="Confirm password"
                  className="border-purple-800"
                />
              </div>
            </div>
            <div className="mr-9 md:mr-29 mt-2">
              <h1 className="text-purple-800">
                If u already have an Account ?
                <Link
                  to="/signin"
                  className="text-purple-950 font-bold underline underline-offset-2"
                >
                  SignIn
                </Link>
              </h1>
            </div>

            <div className="mt-5">
              <Button className="bg-purple-800 hover:bg-purple-900 shadow-purple-700">
                SignUp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
