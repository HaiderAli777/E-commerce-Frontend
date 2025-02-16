import React, { useState } from "react";
import imgage1 from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [pop, setpop] = useState(false);

  const ShowtheMenu = () => {
    setpop(true);
  };

  const ClosetheMenu = () => {
    setpop(false);
  };

  return (
    <>
      <div>
        <div className="justify-between flex flex-row bg-gray-100  py-4 px-14  items-center">
          <div className="p-1">
            <img src={imgage1} className="max-w-14"></img>
          </div>
          <div className="hidden md:flex space-x-6 font-bold text-blue-800 ">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact Me</Link>
          </div>
          <div className="hidden md:flex space-x-5 flex-row font-bold text-blue-800">
            <Link to="/">Sign In</Link>
            <Link to="/">Sign Up</Link>
          </div>
          <div className="md:hidden">
            <button onClick={ShowtheMenu}>
              {pop || <FontAwesomeIcon icon={faBars} />}
            </button>
            <button onClick={ClosetheMenu}>
              {pop && <FontAwesomeIcon icon={faXmark} />}
            </button>
          </div>
        </div>
      </div>
      {pop && (
        <div className="bg-blue-300 flex flex-col py-5 space-y-1.5 text-center fixed right-0 left-0 md:hidden">
          <Link to="/">Sign In</Link>
          <Link to="/">Sign Up</Link>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact Me</Link>
        </div>
      )}
    </>
  );
}
