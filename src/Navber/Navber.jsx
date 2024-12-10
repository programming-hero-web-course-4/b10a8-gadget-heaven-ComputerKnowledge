import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Navber.css";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navber = () => {
  const location = useLocation();

  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <NavLink to={"/statistics"}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <div
      className={` px-2 sm:px-4 md:px-6 lg:px-8 navbar  ${
        location.pathname == "/" && "bg-purple-600 text-white"
      }`}
    >
      <div className="navbar-start space-x-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn px-0 btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              location.pathname == "/" && "bg-black text-white"
            }`}
          >
            {link}
          </ul>
        </div>
        <a className="text-xl font-extrabold cursor-default">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-2 md:gap-4 lg:gap-6 px-1">
          {link}
        </ul>
      </div>
      <div className="navbar-end space-x-2">
        <div className="p-2 bg-white rounded-full">
          <MdOutlineShoppingCart className="bg-white text-black text-2xl "></MdOutlineShoppingCart>
        </div>
        <div className="p-2 bg-white rounded-full">
          <FaRegHeart className="bg-white text-black text-2xl  "></FaRegHeart>
        </div>
      </div>
    </div>
  );
};

export default Navber;
