import React from "react";
import imgage1 from "../assets/logo.jpg";
export default function Navbar() {
  return (
    <div>
      <div className="lg:justify-between flex flex-row bg-gray-100  py-4 px-14  items-center">
        <div className="p-1">
          <img src={imgage1} className="max-w-14"></img>
        </div>
        <div className="hidden lg:flex space-x-6 font-bold text-blue-800 ">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Contact Me</h1>
        </div>
        <div className="hidden lg:flex space-x-5 flex-row font-bold text-blue-800">
          <h1>Sign In</h1>
          <h1>Sign Up</h1>
        </div>
        <dv></dv>
      </div>
      <div className="bg-blue-300 flex-col py-5 space-y-1.5 text-center fixed right-0 left-0">
        <h1 className="">Sign In</h1>
        <h1>Sign Up</h1>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Contact Me</h1>
      </div>
    </div>
  );
}
