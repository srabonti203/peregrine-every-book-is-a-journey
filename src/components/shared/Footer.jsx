import Link from "next/link";
import React from "react";
import { FaBookOpen, FaFacebook, FaRegCopyright } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-10/12 mx-auto mb-3 bg-white rounded-md border-t border-gray-300 shadow-sm p-6">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & tagline */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-lg">
            <FaBookOpen className="text-blue-900" />
            <span className="text-gray-500 font-medium">Peregrine</span>
          </div>

          <p className="text-sm text-gray-500 mt-2">Every book is a journey</p>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/all-books" className="hover:text-blue-900 transition">
            Browse Books
          </Link>

          <Link href="/" className="hover:text-blue-900 transition">
            Contact Us
          </Link>

          <Link href="/" className="hover:text-blue-900 transition">
            About
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="divider my-5"></div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaRegCopyright />
          <span>2026 Peregrine</span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5 text-xl">
          <Link href="#">
            <FaFacebook className="text-blue-900 hover:scale-110 transition" />
          </Link>

          <Link href="#">
            <IoLogoYoutube className="text-red-600 hover:scale-110 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
