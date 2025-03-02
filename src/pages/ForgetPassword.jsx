import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setError(true);
    } else {
      setError(false);
      // Handle password reset logic
    }
  };
return (
    <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 w-fit rounded-md shadow-lg">
            <div className="max-w-md w-full space-y-8">
                {/* Title */}
                <h2 className="text-center text-3xl font-extrabold text-purple-custom">
                    Reset Password
                </h2>

                {/* Subtitle */}
                <p className="mt-2 text-center text-sm text-gray-600">
                    Enter email for verification code.
                </p>

                {/* Form */}
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    {/* Email Input Field */}
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <div className="p-4 w-full rounded-sm hover:border-purple-custom border-2 flex items-center space-x-3 border-gray-400 duration-200">
                            <MdOutlineEmail fontSize={25} color="gray" />
                            <input
                                type="email"
                                placeholder="Email"
                                className="border-none outline-none w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                            <p className="text-sm text-yellow-700">
                                Invalid email. Please verify or get help.
                            </p>
                        </div>
                    )}

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button
                            type="button"
                            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-custom to-purple-600 hover:from-purple-custom hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        >
                            Confirm
                        </button>
                    </div>

                    {/* Registration Link */}
                    <div className="text-center text-sm text-gray-600 ">
                        Don't have an account yet?{" "}
                        <span className="text-purple-custom font-semibold ">
                            <Link to={"/Register"}>Register</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
};

export default ForgetPassword;
