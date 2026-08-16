"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending, error } = authClient.useSession();
  // const user = session.user;
  // console.log(user);
  // console.log(session, isPending, error);

  const links = (
    <>
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/all-books"}>All Books</NavLink>
      <NavLink href={"/profile"}>My Profile</NavLink>
    </>
  );

  return (
    <div className="navbar bg-slate-100 w-10/12 mx-auto rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link href={"/"} className="text-xl text-blue-900 font-bold">
          Peregrine
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {isPending ? (
          <div>loading</div>
        ) : session ? (
          <div className="flex items-center gap-2">
            <p className="text-blue-900 font-medium">
              Welcome! {session.user.name}
            </p>
            <button
              className="btn rounded-full bg-blue-900 text-white"
              onClick={async () => await authClient.signOut()}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            href={"/login"}
            className="btn rounded-full bg-blue-900 text-white"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
