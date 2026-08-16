"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  // console.log(session);
  const user = session?.user;
  console.log(user);
  return (
    <div className="w-10/12 mx-auto">
      {isPending ? (
        <div className="flex items-center justify-center text-2xl font-bold min-h-screen">
          Loading...
        </div>
      ) : (
        <main className="min-h-screen py-6 sm:py-10 px-4">
          <div className="w-full max-w-4xl mx-auto space-y-6">
            {/* Header */}
            <div className="bg-white rounded-xl shadow-sm px-5 py-5 sm:px-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                My Profile
              </h1>
              <p className="text-sm sm:text-base text-gray-500 mt-1">
                Manage your personal information and account details.
              </p>
            </div>

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              {/* Cover */}
              <div className="h-28 sm:h-40 bg-linear-to-r from-blue-900 via-indigo-400 to-purple-300" />

              <div className="px-5 sm:px-8 pb-8">
                {/* Profile Image */}
                <div className="-mt-20 sm:-mt-24 flex justify-center">
                  <div className="rounded-full p-1 bg-white shadow-xl">
                    <Image
                      className="rounded-full object-cover w-40 h-40 sm:w-48 sm:h-48"
                      height={192}
                      width={192}
                      src={user.image || "/default-avatar.png"}
                      alt={user.name || "User"}
                    />
                  </div>
                </div>

                {/* User Name */}
                <div className="text-center mt-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {user.name}
                  </h2>

                  <p className="text-sm sm:text-base text-gray-500 mt-1 break-all">
                    {user.email}
                  </p>
                </div>

                {/* User Info */}
                <div className="mt-8">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    My Information
                  </h3>

                  <div className="divider" />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">
                        Full Name
                      </p>

                      <p className="font-semibold text-gray-800">{user.name}</p>
                    </div>

                    {/* Email */}
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                      <p className="text-xs sm:text-sm text-gray-500 mb-1">
                        Email Address
                      </p>

                      <p className="font-semibold text-gray-800 break-all">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="mt-6 flex justify-center sm:justify-end">
                    <Link
                      href="/update-profile"
                      className="btn w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white border-none px-6"
                    >
                      Update Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default ProfilePage;
