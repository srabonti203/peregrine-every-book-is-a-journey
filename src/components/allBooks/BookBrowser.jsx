"use client";

import { useState } from "react";
import LeftSidebar from "./LeftSidebar";
import FeaturedBookCard from "../homepage/FeaturedBookCard";

const BookBrowser = ({ books, bookCategories, activeId }) => {
  const [search, setSearch] = useState("");
  //   console.log(search);

  //   category wise books
  const categoryBooks = books.filter((book) => book.category_id == activeId);

  //   search wise filtered books
  const searchText = search.toLowerCase().trim();
  const searchFiltered = books.filter((book) =>
    book.title.toLowerCase().includes(searchText),
  );
  // console.log(searchFiltered);

  //   final books that need to be displayed
  const displayBooks = searchText ? searchFiltered : categoryBooks;
  console.log(displayBooks);

  return (
    <div>
      {/* Search bar */}
      <div className="flex justify-center w-full">
        <div className="join w-full max-w-xl">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search books..."
            className="input input-bordered join-item w-full"
          />

          <button className="btn btn-neutral join-item">Search</button>
        </div>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 md:grid-cols-9 lg:grid-cols-12 gap-6">
        {/* Left sidebar */}
        <div className="lg:col-span-2 md:col-span-2 flex flex-col">
          <h2 className="text-lg font-medium mb-3">Categories</h2>

          <LeftSidebar activeId={activeId} bookCategories={bookCategories} />
        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-10 md:col-span-7 flex flex-col">
          <h2 className="text-lg text-center font-medium mb-4">All Books</h2>
          {displayBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mt-5">
              {displayBooks.map((book) => (
                <FeaturedBookCard key={book.id} book={book}></FeaturedBookCard>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                No Books Found
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookBrowser;
