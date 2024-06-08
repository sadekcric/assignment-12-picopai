import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useUploadImage from "../../Hooks/useUploadImage";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import useGoogleLogin from "../../Component/useGoogleLogin";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [viewPass, setViewPss] = useState(false);
  const uploadImage = useUploadImage();
  const { loader, setLoader, firebaseRegister, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogin = useGoogleLogin();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  if (loader) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-customSecondary"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-customPrimary animate-spin"></div>
        </div>
      </div>
    );
  }

  const onSubmit = async (data) => {
    // Validation section
    if (data.password.length < 6) {
      setLoader(false);
      return Swal.fire({
        icon: "error",
        title: "Password Must be 6 or up to 6 corrector",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(data.password)) {
      setLoader(false);
      return Swal.fire({
        icon: "error",
        title: "Password must contain an uppercase and a lowercase letter, a digit, and a special character!",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    // Validation Done
    // for Image Upload by imgbb
    const fileImage = { image: data.image[0] };
    const uploadedPhotoFile = await uploadImage(fileImage);
    const photo = uploadedPhotoFile?.data?.data?.display_url;

    // User Information
    const name = data.name;
    const email = data.email.toLowerCase();
    const password = data.password;
    const role = data.role;
    const coin = data.role === "Worker" ? 10 : 50;

    const userInfo = { name, email, password, role, coin, photo };
    console.log(userInfo);

    firebaseRegister(data.email, data.password)
      .then(({ user }) => {
        updateProfile(user, {
          displayName: data.name,
          photoURL: photo,
        })
          .then(() => {
            axiosPublic
              .post("/users", userInfo)
              .then((res) => console.log(res.data))
              .catch((err) => {
                setLoader(false);
                Swal.fire({
                  icon: "error",
                  title: err.message,
                  showConfirmButton: false,
                  timer: 3000,
                });
              });

            logout().then(() => {});
            navigate("/login");
            Swal.fire({
              icon: "success",
              title: "Successfully Registered!",
              showConfirmButton: false,
              timer: 3000,
            });
          })
          .catch((err) => {
            setLoader(false);
            Swal.fire({
              icon: "error",
              title: err.message,
              showConfirmButton: false,
              timer: 3000,
            });
          });

        console.log(user);
      })
      .catch((err) => {
        setLoader(false);
        Swal.fire({
          icon: "error",
          title: err.message,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>picopai | register</title>
      </Helmet>
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-opacity-70  bg-[#fff] rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="mb-10">
              <h3 className="text-3xl font-extrabold">Sign up</h3>
            </div>

            <div>
              <div className="relative flex flex-col items-center">
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                  placeholder="Enter name"
                />
              </div>
              {errors.name && <span className="text-[#ff0000]">This field is required</span>}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex-1">
                <div className="relative flex flex-col items-center">
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                    placeholder="Enter email"
                  />
                </div>
                {errors.email && <span className="text-[#ff0000] block ">This field is required</span>}
              </div>

              <div className="flex-1">
                <div className="relative flex flex-col items-center">
                  <select
                    {...register("role", { required: true })}
                    name="role"
                    className="bg-transparent w-full text-sm border-b border-[#333] px-2 py-3 outline-none placeholder:text-[#333]"
                  >
                    <option value="">Select role</option>
                    <option value="Worker">Worker</option>
                    <option value="Task Creator">Task Creator</option>
                  </select>
                </div>
                {errors.role && <span className="text-[#ff0000] ">This field is required</span>}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex-1">
                <div className="relative flex flex-col items-center">
                  <input
                    {...register("password", { required: true })}
                    type={viewPass ? "text" : "password"}
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
                  {errors.password && <span className="text-[#ff0000] ">This field is required</span>}
                </div>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <div className="absolute  top-0  left-0 w-full bg-transparent  py-3 border-b border-[#333] text-[#333] text-center font-semibold text-sm px-2">
                    Enter Photo
                  </div>
                  <button className="opacity-0 z-10">
                    <input
                      {...register("image", { required: true })}
                      type="file"
                      required
                      className=" block w-full px-10 cursor-pointer py-2"
                    />
                  </button>
                  {errors.image && <span className="text-[#ff0000]">This field is required</span>}
                </div>
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
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
              <button onClick={() => handleLogin()} type="button" className="border-none outline-none">
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
