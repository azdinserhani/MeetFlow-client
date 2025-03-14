import { MdOutlineEmail } from "react-icons/md";
import GoogleButton from "./GoogleButton";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoEyeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="sm:w-full md:w-[50%] flex flex-col  text-left md:p-20">
      <div className="flex flex-col space-y-4">
        <h2 className="text-purple-custom text-5xl font-bold">MeetFlow</h2>
        <p className="font-semibold text-4xl">Register to your Account</p>
        <span className="text-gray-400">
          Welcome! Select method to Register:
        </span>
      </div>
      <div className="flex-col flex space-y-3 justify-center items-center ">
        <GoogleButton />
        <p className="text-gray-400 text-center">or continue with Email:</p>
        <form action="" className="w-full flex flex-col space-y-3">
          <div className="p-4  w-full rounded-sm  hover:border-purple-custom border-2 flex items-center space-x-3 border-gray-400 duration-200">
            <FaRegUser fontSize={20} color="gray" />
            <input
              type="text  "
              placeholder="Username"
              className="border-none  outline-none w-full"
            />
          </div>
          <div className="p-4  w-full rounded-sm  hover:border-purple-custom border-2 flex items-center space-x-3 border-gray-400 duration-200">
            <MdOutlineEmail fontSize={25} color="gray" />
            <input
              type="email"
              placeholder="Email"
              className="border-none  outline-none w-full"
            />
          </div>
          <div className="p-4  w-full rounded-sm  hover:border-purple-custom border-2 flex items-center space-x-3 border-gray-400 duration-200">
            <RiLockPasswordLine fontSize={25} color="gray" />
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              className="border-none  outline-none w-full"
            />
            {showPassword ? (
              <FaRegEyeSlash
                fontSize={25}
                color="gray"
                className="cursor-pointer"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            ) : (
              <IoEyeSharp
                fontSize={25}
                color="gray"
                className="cursor-pointer"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              />
            )}
          </div>
          <div className="p-4  w-full rounded-sm  hover:border-purple-custom border-2 flex items-center space-x-3 border-gray-400 duration-200">
            <RiLockPasswordLine fontSize={25} color="gray" />
            <input
              type={`${showConfirmPassword ? "text" : "password"}`}
              placeholder="Confirm Password"
              className="border-none  outline-none w-full"
            />
            {showConfirmPassword ? (
              <FaRegEyeSlash
                fontSize={25}
                color="gray"
                className="cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              />
            ) : (
              <IoEyeSharp
                fontSize={25}
                color="gray"
                className="cursor-pointer"
                onClick={() => {
                  setShowConfirmPassword(!showConfirmPassword);
                }}
              />
            )}
          </div>

          <button className="p-4 hover:bg-purple-custom  hover:text-white font-semibold cursor-pointer border-y-purple-custom border rounded-lg appearance-none duration-300 text-purple-custom">
            Register
          </button>
        </form>
        <p>
          Already have an account?
          <Link to="/login">
            <span className="text-purple-custom font-semibold pl-2 cursor-pointer">
              Login now
            </span>
          </Link>
        </p>
      </div>{" "}
    </div>
  );
};

export default RegisterForm;
