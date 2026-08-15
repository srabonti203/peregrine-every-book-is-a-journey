import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

const FeaturedBookCard = ({ book }) => {
  return (
    <div key={book.id} className="card bg-base-100 w-full shadow-sm">
      <div className="flex items-center justify-center p-4">
        <Image
          width={200}
          height={250}
          src={book.image_url}
          alt={book.title}
          className="w-70 h-90 object-center object-contain mt-4"
        ></Image>
      </div>

      <div className="card-body">
        <h2 className="card-title">{book.title}</h2>
        <p>
          Author : <span className="font-medium">{book.author}</span>
        </p>
        <div className="flex items-center">
          <p className="font-semibold">Rating : </p>
          <span className="flex items-center gap-2">
            <FaStar className="text-blue-900" /> <span>{book.rating}</span>
          </span>
        </div>
        <div className="card-actions justify-end">
          <Link href={`/books/${book.id}`}>
            <button className="btn bg-blue-900 text-white rounded-md">
              See Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBookCard;
