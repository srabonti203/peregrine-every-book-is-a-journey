import LeftSidebar from "@/components/allBooks/LeftSidebar";
import RightSidebar from "@/components/allBooks/RightSidebar";
import { fetchBookCategory, fetchBooks } from "@/lib/data";
import React from "react";

const Category = async ({ params }) => {
  const { id } = await params;
  const books = await fetchBooks();
  const bookCategories = await fetchBookCategory();
  // console.log(books);
  // console.log(bookCategories);
  return (
    <div className="w-10/12 mx-auto space-y-10 my-5">
      {/* search bar */}

    

    {/* grid layout for left and write side */}
      <div className="grid grid-cols-12 gap-3">
        {/* left sidebar */}
        <div className="col-span-3 flex flex-col">
          <h2 className=" text-lg font-medium mb-3">Categories</h2>
          <LeftSidebar
            activeId={id}
            bookCategories={bookCategories}
          ></LeftSidebar>
        </div>

        {/* right sidebar */}
        <div className="col-span-9 flex flex-col ">
          <h2 className="text-lg text-center font-medium">All Books</h2>
          <RightSidebar activeId={id} books={books}></RightSidebar>
        </div>
      </div>
    </div>
  );
};

export default Category;
