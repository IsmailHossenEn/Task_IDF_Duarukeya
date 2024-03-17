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
    <li>
      <div className="flex items-center">
        <p
          className={
            item.children
              ? "p-1 bg-black text-white rounded-sm text-[18px] "
              : "bg-gray-600 p-1 text-[16px]  text-white rounded-sm"
          }
        >
          {item.label}
        </p>{" "}
        {item && item.children && item.children.length ? (
          <span
            className="p-1 bg-black text-white rounded-sm"
            onClick={() => handleToggleChildren(item.label)}
          >
            {currentchildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
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
