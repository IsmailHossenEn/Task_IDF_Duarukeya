"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { TbSearch } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import { IoFileTrayFull } from "react-icons/io5";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex items-center py-5 justify-between px-10 relative">
      <div className="ml-32 text-2xl mt-10 text-[#393939] font-semibold">
        <h2>Duas Page</h2>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative mr-20 items-center">
          <input
            placeholder="Search by Dua name"
            type="text"
            className="h-[50px] w-[371px] rounded-xl px-5 outline-none border focus:border-[#1FA45B]"
          />
          <TbSearch className="bg-[#F3F4F6] absolute top-1 right-2 h-[40px] w-[54px] px-2 py-1 text-[#868686] rounded-md cursor-pointer" />
        </div>
        <div className="relative">
          <Image
            src="/Vector.png"
            width={45}
            height={45}
            className="cursor-pointer"
          />
          <FaSortDown className="absolute top-2 -right-4 text-[#868686] cursor-pointer" />
        </div>
        <div>
          <IoIosSettings
            className="text-[#1FA45B] h-8 w-10 cursor-pointer"
            onClick={toggleNav}
          />
        </div>
      </div>

      {isOpen && (
        <div className="w-[330px] h-[700px] bg-white absolute top-20 rounded-3xl right-3">
          <h1 className="text-3xl text-black text-center my-10">Setting</h1>
          <div className="flex flex-col gap-10 items-center">
            <div className="flex items-center gap-2 justify-start pl-3 rounded-lg py-3 bg-[#F7F8FA] w-[270px] h-[58px] hover:border-l-4 hover:border-[#1FA45B] cursor-pointer">
              <span className="w-10 h-10 bg-[#E8F0F5] rounded-full  text-center flex items-center justify-center">
                <IoLanguage className="w-7 h-7 text-[#868686] hover:text-[#1FA45B] focus:text-[#1FA45B]" />
              </span>
              <h2 className="hover:text-[#1FA45B] text-[#868686] text-xl focus:text-[#1FA45B]">
                Language Settings
              </h2>
            </div>
            <div className="flex items-center gap-2 justify-start pl-3 rounded-lg py-3 bg-[#F7F8FA] w-[270px] h-[58px] hover:border-l-4 hover:border-[#1FA45B] cursor-pointer">
              <span className="w-10 h-10 bg-[#E8F0F5] rounded-full  text-center flex items-center justify-center">
                <IoFileTrayFull className="w-7 h-7 text-[#868686] hover:text-[#1FA45B] focus:text-[#1FA45B]" />
              </span>
              <h2 className="hover:text-[#1FA45B] text-[#868686] text-xl focus:text-[#1FA45B]">
                General Settings
              </h2>
            </div>
            <div className="flex items-center gap-2 justify-start pl-3 rounded-lg py-3 bg-[#F7F8FA] w-[270px] h-[58px] hover:border-l-4 hover:border-[#1FA45B] cursor-pointer">
              <span className="w-10 h-10 bg-[#E8F0F5] rounded-full  text-center flex items-center justify-center">
                <IoLanguage className="w-7 h-7 text-[#868686] hover:text-[#1FA45B] focus:text-[#1FA45B]" />
              </span>
              <h2 className="hover:text-[#1FA45B] text-[#868686] text-xl focus:text-[#1FA45B]">
                Font Settings
              </h2>
            </div>
            <div className="flex items-center gap-2 justify-start pl-3 rounded-lg py-3 bg-[#F7F8FA] w-[270px] h-[58px] hover:border-l-4 hover:border-[#1FA45B] cursor-pointer">
              <span className="w-10 h-10 bg-[#E8F0F5] rounded-full  text-center flex items-center justify-center">
                <IoLanguage className="w-7 h-7 text-[#868686] hover:text-[#1FA45B] focus:text-[#1FA45B]" />
              </span>
              <h2 className="hover:text-[#1FA45B] text-[#868686] text-xl focus:text-[#1FA45B]">
                Appearance Settings
              </h2>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
