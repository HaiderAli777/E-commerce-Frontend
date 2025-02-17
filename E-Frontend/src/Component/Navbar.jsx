import React, { useState } from "react";
import imgage1 from "../assets/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
  faCartShopping,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

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
        <div className="justify-between flex flex-row bg-purple-100  py-4 px-14  items-center">
          <div className="p-1 text-purple-800 font-bold text-3xl font-serif">
            HAD<span className=" text-purple-300 font-bold">DI.</span>
          </div>
          <div className="hidden md:flex space-x-6 font-bold text-purple-800 ">
            <Link to="/" className="hover:border-b-4">
              Home
            </Link>
            <Link to="/" className="hover:border-b-4">
              Collection
            </Link>
            <Link to="/" className="hover:border-b-4">
              About
            </Link>
            <Link to="/" className="hover:border-b-4">
              Contact
            </Link>
          </div>
          <div className=" md:flex space-x-5 flex-row font-bold text-purple-800 items-center">
            <Link>
              <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon>
            </Link>
            <Link>
              <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </Link>

            <Link to="/">
              <button className="border-2 ro rounded-2xl p-2 hover:bg-purple-800 hover:text-white">
                SignIn
              </button>
            </Link>
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
        <div className="bg-purple-100 flex flex-col py-5 space-y-1.5 text-center fixed right-0 left-0 md:hidden">
          <Link to="/" className="font-medium text-purple-800 border-b-2 pb-1">
            SignIn
          </Link>
          <Link to="/" className="font-medium text-purple-800 border-b-2 pb-1">
            Home
          </Link>
          <Link to="/" className="font-medium text-purple-800 border-b-2 pb-1">
            Collection
          </Link>
          <Link to="/" className="font-medium text-purple-800 border-b-2 pb-1">
            About
          </Link>
          <Link to="/" className="font-medium text-purple-800 border-b-2 pb-1">
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
