import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

const Register = () => {
  const [viewPass, setViewPss] = useState(false);
  return (
    <div>
      <div
        className="flex justify-center items-center  text-[#333] h-full min-h-screen p-4 "
        style={{
          background: "url(https://i.ibb.co/28887J6/register.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md  w-full mx-auto">
          <form className="bg-opacity-70  bg-[#fff] rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold">Sign up</h3>
            </div>

            <div>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                  placeholder="Enter name"
                />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex-1">
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div className="flex-1">
                <div className="relative flex items-center">
                  <select
                    name="role"
                    required
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                  >
                    <option value="">Select role</option>
                    <option value="Worker">Worker</option>
                    <option value="Task Creator">Task Creator</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex-1">
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={viewPass ? "text" : "password"}
                    required
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                    placeholder="Enter password"
                  />
                  <div className="absolute top-1/2 right-3 -translate-y-[50%] text-lg">
                    {viewPass ? (
                      <FaRegEye onClick={() => setViewPss(!viewPass)} />
                    ) : (
                      <FaRegEyeSlash onClick={() => setViewPss(!viewPass)} />
                    )}
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <div className="absolute  top-0  left-0 w-full bg-[#fff]  py-3 border-b border-[#333] text-[#333] text-center font-semibold text-sm px-2">
                    Enter Photo
                  </div>
                  <button className="opacity-0 z-10">
                    <input name="name" type="file" required className=" block w-full px-10 cursor-pointer py-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-[#fff] bg-[#333] hover:bg-[#222] focus:outline-none"
              >
                Sign up
              </button>
              <p className="text-sm text-center mt-6">
                Don't have an account{" "}
                <Link to={"/login"} className="font-semibold hover:underline ml-1 whitespace-nowrap">
                  Sign in here
                </Link>
              </p>
            </div>

            <hr className="my-6 border-gray-500" />
            <div className="space-x-8 flex justify-center">
              <button type="button" className="border-none outline-none">
                <div className="flex items-center gap-2 font-semibold bg-[#fff] px-4 py-3 rounded-md text-[#333] text-lg bg-opacity-70 shadow-xl">
                  <FcGoogle className="text-xl" />
                  <span>Google Login</span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
