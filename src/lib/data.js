import books from "@/data/books.json";
import bookCategory from "@/data/categories.json";

export const fetchBooks = async () => {
  return books;
};

export const fetchBookCategory = async () => {
  return bookCategory;
};
export const fetchBookDetail = async (id) => {
  const selectedBook = books.find((book) => book.id == id);
  return selectedBook;
};
