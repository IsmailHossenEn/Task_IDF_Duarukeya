import Image from "next/image";
import React from "react";
import { CiHome } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa6";
import { MdOutlineAddHome } from "react-icons/md";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdBook } from "react-icons/io";
const Sidebar = () => {
  return (
    <div className="h-[740px] w-[100px] bg-white absolute top-10 left-6 rounded-3xl">
      <div className="flex flex-col items-center justify-between h-full">
        <a className="my-10" href="#">
          <Image src="/hand.png" width={73} height={73} />
        </a>
        <div className="flex flex-col items-center justify-between gap-8">
          <a href="#" className="py-2 px-2 rounded-full bg-[#E8F0F5] shadow-sm">
            <CiHome className="h-5 w-5 text-[#868686]" />
          </a>
          <a href="#" className="py-2 px-2 rounded-full bg-[#E8F0F5] shadow-sm">
            <AiOutlineAppstore className="h-5 w-5 text-[#868686]" />
          </a>
          <a href="#" className="py-2 px-2 rounded-full bg-[#E8F0F5] shadow-sm">
            <AiOutlineBulb className="h-5 w-5 text-[#868686]" />
          </a>
          <a href="#" className="py-2 px-2 rounded-full bg-[#E8F0F5] shadow-sm">
            <FaRegBookmark className="h-5 w-5 text-[#868686]" />
          </a>
          <a href="#" className="py-2 px-2 rounded-full bg-[#E8F0F5] shadow-sm">
            <MdOutlineAddHome className="h-5 w-5 text-[#868686]" />
          </a>
          <a href="#" className="py-2 px-2 rounded-full bg-[#E8F0F5] shadow-sm">
            <IoChatbubblesOutline className="h-5 w-5 text-[#868686]" />
          </a>
          <a href="#" className="py-2 px-2 rounded-full bg-[#E8F0F5] shadow-sm">
            <IoMdBook className="h-5 w-5 text-[#868686]" />
          </a>
        </div>
        <a
          href="#"
          className="bg-[#1FA45B] w-[45px] h-[45px] rounded-lg flex items-center justify-center my-10"
        >
          <Image src="/icon.png" width={24} height={24} />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
