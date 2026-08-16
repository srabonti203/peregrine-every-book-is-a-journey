"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleUpdateProfile = async (data) => {
    const { name, photo } = data;
    const { data: res, error } = await authClient.updateUser({
      image: photo,
      name: name,
    });
    if (error) {
      toast.error(error.message);
    }
    if (res) {
      toast.success("Profile updated successfully");
      router.push("/profile");
    }
  };

  return (
    <div className="w-10/12 mx-auto min-h-screen py-8 sm:py-12 px-4">
      <div className="w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-5 sm:p-7 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Update Profile
          </h1>

          <p className="text-sm sm:text-base text-gray-500 mt-2">
            Update your personal information and profile picture.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8">
          <form onSubmit={handleSubmit(handleUpdateProfile)}>
            <div className="space-y-6">
              {/* Name */}
              <fieldset className="fieldset">
                <label
                  className="label text-base sm:text-lg font-semibold text-gray-700"
                  htmlFor="name"
                >
                  Full Name
                </label>

                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  type="text"
                  id="name"
                  className="input input-bordered w-full h-12"
                  placeholder="Enter your full name"
                />

                {errors.name && (
                  <span className="text-sm text-red-600 mt-1">
                    {errors.name.message}
                  </span>
                )}
              </fieldset>

              {/* Photo URL */}
              <fieldset className="fieldset">
                <label
                  className="label text-base sm:text-lg font-semibold text-gray-700"
                  htmlFor="photo"
                >
                  Profile Photo URL
                </label>

                <input
                  {...register("photo", {
                    required: "Photo URL is required",
                  })}
                  type="url"
                  id="photo"
                  className="input input-bordered w-full h-12"
                  placeholder="https://example.com/photo.jpg"
                />

                {errors.photo && (
                  <span className="text-sm text-red-600 mt-1">
                    {errors.photo.message}
                  </span>
                )}

                <p className="text-xs sm:text-sm text-gray-400 mt-1">
                  Enter a valid URL for your profile picture.
                </p>
              </fieldset>

              {/* Buttons */}
              <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => router.push("/profile")}
                  className="btn w-full sm:w-auto sm:flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 border-none"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn w-full sm:w-auto sm:flex-1 bg-blue-900 hover:bg-blue-800 text-white border-none"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
