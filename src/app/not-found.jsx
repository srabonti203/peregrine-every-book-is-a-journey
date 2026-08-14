import Link from "next/link";
import { FaBookOpen, FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center">
      <div className="w-xl shadow-sm p-10 bg-slate-100 rounded-xl">
        <FaBookOpen className="mx-auto text-5xl text-blue-900 mb-4" />

        <h1 className="text-6xl font-bold">404</h1>

        <h2 className="text-xl font-semibold mt-3">Page Not Found</h2>

        <p className="text-gray-500 mt-2">Sorry, this page does not exist.</p>

        <Link
          href="/"
          className="btn text-lg bg-blue-900 text-white rounded-xl mt-3"
        >
          <FaHome />
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
