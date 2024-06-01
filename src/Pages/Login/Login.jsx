import { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import useGoogleLogin from "./../../Component/useGoogleLogin";

const Login = () => {
  const [viewPass, setViewPss] = useState(false);
  const googleLogin = useGoogleLogin();

  return (
    <div>
      <div
        className="flex justify-center items-center  text-[#333] h-full min-h-screen p-4"
        style={{
          background: "url(https://i.ibb.co/28887J6/register.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md w-full mx-auto">
          <form className="bg-opacity-70 bg-[#fff] rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]">
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold">Sign in</h3>
            </div>

            <div>
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

            <div className="mt-8">
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={viewPass ? "text" : "password"}
                  required
                  className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                  placeholder="Enter password"
                />
                <div className="absolute top-1/2 right-3 -translate-y-[50%] text-lg">
                  {viewPass ? <FaRegEye onClick={() => setViewPss(!viewPass)} /> : <FaRegEyeSlash onClick={() => setViewPss(!viewPass)} />}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="button"
                className="w-full py-2.5 px-4 text-sm font-semibold rounded-full text-[#fff] bg-[#333] hover:bg-[#222] focus:outline-none"
              >
                Sign in
              </button>
              <p className="text-sm text-center mt-6">
                Don't have an account{" "}
                <Link to="/register" className="font-semibold hover:underline ml-1 whitespace-nowrap">
                  Sign up here
                </Link>
              </p>
            </div>
            <hr className="my-6 border-gray-500" />
            <div className="space-x-8 flex justify-center">
              <button onClick={() => googleLogin()} type="button" className="border-none outline-none">
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

export default Login;
