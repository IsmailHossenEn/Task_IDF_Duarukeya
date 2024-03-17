import React from "react";
import { TbSearch } from "react-icons/tb";
import CategorieList from "./CategorieList";

const Categories = ({ demo = [] }) => {
  return (
    <div>
      <div className="flex m-4 relative">
        <TbSearch className="absolute text-[#868686] text-xl left-2 top-2.5" />
        <input
          placeholder="Search by Categories"
          type="text"
          className="text-[#868686] border border-[#E2E2E2] w-full py-2 focus:outline-green-600 pl-9 rounded-xl "
        />
      </div>
      <div>
        <CategorieList list={demo} />
      </div>
    </div>
  );
};

export default Categories;
