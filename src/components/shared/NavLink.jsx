"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href == pathName;
  return (
    <Link
      href={href}
      className={`${isActive ? "bg-blue-900 text-white" : ""} mx-2 my-1 btn rounded-full`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
