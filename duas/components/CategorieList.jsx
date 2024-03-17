import React from "react";
import CategoryItems from "./CategoryItems";

const CategorieList = ({ list = [] }) => {
  return (
    <ul>
      {list && list.length
        ? list.map((listItem) => <CategoryItems item={listItem} />)
        : null}
    </ul>
  );
};

export default CategorieList;
