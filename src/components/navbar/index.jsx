import React from "react";
import { RiScales3Fill } from "react-icons/ri";
import { BsCreditCard } from "react-icons/bs";
import { PiTruck } from "react-icons/pi";
import { PiShoppingCartBold } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className=" flex justify-center">
        <div className="flex items-center w-[1400px]  m-auto justify-between">
          <div className="">
            <img className="h-[40px]" src="./src/assets/icons/logo.svg" alt="" />
          </div>
          <button className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border rounded-[10px] bg-[#006BFF] px-3  shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-800 before:transition-all before:duration-500 text-white hover:before:left-0 hover:before:w-full">
            <span className="relative z-10">Categories</span>
          </button>
          <div className="border-2 border-blue-500 w-[480px] rounded-[10px] flex justify-between">
            <input
              className="w-[250px] py-[5px] px-[10px] border-none outline-none "
              type="text"
              placeholder="search..."
            />
            <button className="bg-[#006BFF] px-[20px] py-[8px] text-white h-full  rounded-r-lg">
              <span className="relative z-10">search</span>
            </button>
          </div>
          <ul className="flex gap-[25px]">
            <li className="flex flex-col items-center">
              <RiScales3Fill className="text-[23px]" />
              <span>Comparison</span>
            </li>
            <li className="flex flex-col items-center">
              <BsCreditCard className="text-[23px]" />
              <span>Pay</span>
            </li>
            <li className="flex flex-col items-center">
              <PiTruck className="text-[23px]" />
              <span>track</span>
            </li>
            <li className="flex flex-col items-center">
              <PiShoppingCartBold className="text-[23px]" />
              <span>Basket</span>
            </li>
            <li className="flex flex-col items-center">
              <FaRegHeart className="text-[23px]" />
              <span>Featured</span>
            </li>
            <li className="flex flex-col items-center">
              <RiScales3Fill className="text-[23px]" />
              <span>Login</span>
            </li>
            <li className="flex flex-col items-center">
              <RxAvatar className="text-[23px]" />
              <span>Login</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[1400px] m-auto py-[15px]">
        <ul className="flex justify-around">
          <li className="">
            <NavLink to="/">home</NavLink>
          </li>
          <li className="">
            <NavLink to="/admin">Admin</NavLink>
          </li>
          <li className="">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
