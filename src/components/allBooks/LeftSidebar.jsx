import Link from "next/link";
import React from "react";

const LeftSidebar = ({ bookCategories, activeId }) => {
  console.log(bookCategories);
  return (
    <div className="flex flex-col container">
      {bookCategories.map((category) => (
        <Link
          href={`/all-books/${category.category_id}`}
          className={`btn text-lg ${activeId == category.category_id ? "bg-blue-900 text-white" : ""}`}
          key={category.category_id}
        >
          {category.category_name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSidebar;
