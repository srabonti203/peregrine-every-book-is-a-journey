import BookBrowser from "@/components/allBooks/BookBrowser";

import { fetchBookCategory, fetchBooks } from "../../../../lib/data";
import React from "react";

const Category = async ({ params }) => {
  const { id } = await params;

  const books = await fetchBooks();
  const bookCategories = await fetchBookCategory();

  return (
    <div className="w-11/12 md:w-10/12 mx-auto space-y-8 md:space-y-10 my-5">
      <BookBrowser
        books={books}
        bookCategories={bookCategories}
        activeId={id}
      ></BookBrowser>
    </div>
  );
};

export default Category;
