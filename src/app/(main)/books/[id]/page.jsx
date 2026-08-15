import Borrowbtn from "@/components/Borrowbtn";
import { fetchBookDetail } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const BookDetail = async ({ params }) => {
  const { id } = await params;
  const selectedBook = await fetchBookDetail(id);

  return (
    <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto my-8">
      <div className="card lg:card-side bg-base-100 shadow-md overflow-hidden">
        {/* Image */}
        <figure className="w-full lg:w-2/5 bg-slate-50 flex items-center justify-center p-5">
          <Image
            src={selectedBook.image_url}
            width={600}
            height={800}
            alt={selectedBook.title}
            className="w-75 h-105 sm:w-90 sm:h-125 md:w-100 md:h-137.5 lg:w-112.5 lg:h-155 rounded-md contain"
          />
        </figure>

        {/* Details */}
        <div className="w-full lg:w-3/5 p-15 space-y-2">
          {/* Title */}
          <h2 className="card-title text-2xl md:text-3xl">
            {selectedBook.title}
          </h2>

          {/* Author */}
          <p className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">Author:</span>
            <span className="text-lg text-gray-600">{selectedBook.author}</span>
          </p>

          {/* Quantity */}
          <p className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">Available quantity:</span>
            <span className="text-lg text-gray-600">
              {selectedBook.available_quantity}
            </span>
          </p>

          {/* Rating */}
          <p className="flex items-center gap-2">
            <span className="font-semibold">Rating:</span>

            <span className="flex items-center gap-2 text-lg">
              <FaStar className="text-blue-900" />
              {selectedBook.rating}
            </span>
          </p>

          {/* Description */}
          <div className="mt-3">
            <h3 className="font-semibold mb-2">Description:</h3>

            <p className="text-gray-600 leading-7">
              {selectedBook.description}
            </p>
          </div>

          {/* Button */}
          <div className="card-actions justify-end mt-6">
            <Borrowbtn selectedBook={selectedBook}></Borrowbtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
