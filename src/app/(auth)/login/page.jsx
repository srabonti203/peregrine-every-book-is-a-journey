"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
    const { email, password } = data;

    const { data: res, error } = await authClient.signIn.email({
      email: email, // required
      password: password, // required
      callbackURL: "/",
    });

    console.log(res, error);
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Loged in successfully");
      router.push("/");
    }
  };

  return (
    <div className="min-h-[80vh] container mx-auto  my-10 flex items-center justify-center">
      <div className="p-8 bg-white w-8/12 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-center">
          Login your account
        </h2>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handleLogin)}>
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
          {/* password */}
          <fieldset className="fieldset">
            <label className="label text-lg font-medium" htmlFor="name">
              Password
            </label>
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
              type="password"
              id="password"
              className="input container"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </fieldset>
          {/* login btn */}
          <button className="btn bg-slate-900 text-white container mt-4 rounded-md">
            Login
          </button>

          {/* dont have login? */}
          <p className="text-center mt-4">
            Dont have an account?
            <Link className="p-2 text-red-500" href={"/registration"}>
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
