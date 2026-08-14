import Maequee from "@/components/Marquee";
import Link from "next/link";
import "animate.css";
import { fetchBooks } from "@/lib/data";
import FeaturedBooks from "@/components/homepage/FeaturedBooks";
import PopularBooks from "@/components/homepage/PopularBooks";
import Membership from "@/components/homepage/Membership";

const HomePage = async () => {
  const books = await fetchBooks();
  // console.log(books);

  // featured books finding
  const featuredBooksId = ["001", "003", "005", "007"];
  const featuredBooks = books.filter((book) =>
    featuredBooksId.includes(book.id),
  );
  // console.log(featuredBooks);

  // popilar books finding
  const popularBooks = books.filter((book) => book.rating >= 4.7);
  console.log(popularBooks);
  return (
    <div className="w-10/12 mx-auto space-y-10 my-5">
      <Maequee books={books}></Maequee>
      {/* banner */}
      <div className="flex flex-col items-center justify-center w-10/12 mx-auto min-h-[30vh] bg-slate-50 rounded-md">
        <h2 className="animate__animated animate__fadeInDown text-5xl font-medium text-cyan-800">
          Find Your Next Read
        </h2>
        <Link href={"/all-books"} className="btn bg-blue-900 text-white mt-7">
          Browse Now
        </Link>
      </div>

      {/* featured books */}
      <h2 className="text-center text-2xl font-semibold text-cyan-800">
        Featured Books
      </h2>
      <div>
        <FeaturedBooks featuredBooks={featuredBooks}></FeaturedBooks>
      </div>

      {/* popular books */}
      <h2 className="text-center text-2xl font-semibold text-cyan-800">
        Popular Books
      </h2>
      <div>
        <PopularBooks popularBooks={popularBooks}></PopularBooks>
      </div>

      {/* membership section */}
      <div>
        <Membership></Membership>
      </div>
    </div>
  );
};

export default HomePage;
