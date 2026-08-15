"use client";
import { toast } from "react-toastify";

const Borrowbtn = ({ selectedBook }) => {
  return (
    <button
      className="btn bg-blue-900 text-white"
      onClick={() =>
        toast.success(`${selectedBook.title} is borrowed successfully.`)
      }
    >
      Borrow Book
    </button>
  );
};

export default Borrowbtn;
