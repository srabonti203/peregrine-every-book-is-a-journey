"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { name, email, photo, password } = data;
    // console.log(name, email, photo, password);
    const { data: res, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Registered successfully");
      router.push("/login");
    }
  };
  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data);
  };
  return (
    <div className="min-h-[80vh] container mx-auto  my-10 flex items-center justify-center">
      <div className="p-8 bg-white w-8/12 rounded-lg shadow-sm flex flex-col gap-3">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleLogin)}>
          {/* name */}
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Enter name
            </label>
            <input
              {...register("name", { required: "This field is required" })}
              type="name"
              id="name"
              className="input container"
              placeholder="Enter your name"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </fieldset>

          {/* email */}
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Email address
            </label>
            <input
              {...register("email", { required: "This field is required" })}
              type="email"
              id="email"
              className="input container"
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </fieldset>

          {/* photo url */}
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Photo URL
            </label>
            <input
              {...register("photo", { required: "This field is required" })}
              type="text"
              id="photo"
              className="input container"
              placeholder="Enter image URL here"
            />
            {errors.photo && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </fieldset>

          {/* password */}
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="password">
              Password
            </label>

            <div className="relative">
              <input
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
                    message:
                      "Password must contain lowercase,uppercase,numbers and special characters",
                  },
                })}
                type={showPassword ? "text" : "password"}
                id="password"
                className="input w-full pr-10"
                placeholder="Enter your password"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </fieldset>
          {/* login btn */}

          <button className="btn bg-slate-900 text-white container mt-4 rounded-md">
            Register
          </button>
        </form>
        {/* dont have login? */}
        <p className="text-center mt-3">
          Aready registered?
          <Link className="p-2 text-red-500" href={"/login"}>
            Login
          </Link>
        </p>
        <p className="text-center">or</p>
        <button
          onClick={handleGoogleSignin}
          className="btn text-blue-950 bg-blue-100"
        >
          <FcGoogle /> Login with google
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
