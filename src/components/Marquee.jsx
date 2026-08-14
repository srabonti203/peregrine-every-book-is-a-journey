import React from "react";
import Marquee from "react-fast-marquee";

const Maequee = ({ books }) => {
  return (
    <div className="flex items-center gap-2 p-3 border-t border-b border-gray-300">
      <button className="btn bg-blue-900 text-white rounded-md">
        New Arrivals
      </button>
      <Marquee>
        {books.map((book) => (
          <span key={book.id} className="mx-3">
            {book.title},
          </span>
        ))}
        <span className="font-medium">| Special Discount on Membership...</span>
      </Marquee>
    </div>
  );
};

export default Maequee;
