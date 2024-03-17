"use client";
import React, { useState } from "react";
import CategorieList from "./CategorieList";

const CategoryItems = ({ item }) => {
  const [currentchildren, setcurrentChildren] = useState({});
  const handleToggleChildren = (getCurrentChildren) => {
    setcurrentChildren({
      ...currentchildren,
      [getCurrentChildren]: !currentchildren[getCurrentChildren],
    });
  };
  return (
    <li className="cursor-pointer mx-2">
      <div className="flex items-center">
        <p
          onClick={() => handleToggleChildren(item.label)}
          className={
            item.children
              ? "p-1 bg-[#E2E2E2] text-[#1FA45B] pl-10 text-[18px] w-full h-[70px] items-center flex rounded-xl"
              : "bg-gray-600 p-1 text-[16px] pl-10 text-white rounded-sm cursor-pointer w-full "
          }
        >
          {item.label}
        </p>{" "}
      </div>
      <div className="py-1 px-5">
        {item &&
        item.children &&
        item.children.length > 0 &&
        currentchildren[item.label] ? (
          <CategorieList list={item.children} />
        ) : null}
      </div>
    </li>
  );
};

export default CategoryItems;
