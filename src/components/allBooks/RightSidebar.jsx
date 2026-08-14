import React from "react";
import RightSideBookCard from "./RightSideBookCard";

const RightSidebar = ({ books, activeId }) => {
  const filteredBooks = books.filter((book) => book.category_id == activeId);
  // console.log(filteredBooks);
  return (
    <div className="flex flex-wrap gap-3">
      {filteredBooks.map((book) => (
        <RightSideBookCard key={book.id}></RightSideBookCard>
      ))}
    </div>
  );
};

export default RightSidebar;
