import React, { useEffect, useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSelector } from "react-redux";
import { googleSignIn, registerUser } from "../redux/service/firebaseAuth";
import { Link, useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";
const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "password must be at least 6 characters"),
});

const Signup = () => {
  const { user, loading, error } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/employee");
    }
  }, [user, navigate]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const { email, password } = watch();

  const onSubmit = async () => {
    await registerUser(email, password);
  };
  const handleGoogleLogin = async () => {
    await googleSignIn();
  };
  console.log("user", user);
  return (
    <>
      <div className="bg-white rounded-lg py-5 min-h-screen flex flex-col justify-center">
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5">
            <div className="flex items-center justify-center w-full lg:p-12">
              <div className="flex items-center xl:p-10">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                >
                  <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                    Sign Up
                  </h3>
                  <p className="mb-4 text-grey-700">
                    Enter your email and password
                  </p>
                  <button
                    onClick={handleGoogleLogin}
                    type="button"
                    className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300"
                  >
                    <FcGoogle className="text-xl" /> &nbsp; Continue with Google
                  </button>
                  <div className="flex items-center mb-3">
                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                    <p className="mx-4 text-grey-600">or</p>
                    <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  </div>
                  <label
                    htmlFor="email"
                    className="mb-2 text-sm text-start text-grey-900"
                  >
                    Email*
                  </label>
                  <input
                    {...register("email")}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="mail@loopple.com"
                    className=" w-full px-5 py-4 mr-2 text-sm font-medium outline-none  mb-7  bg-gray-200 text-black rounded-2xl"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                  <label
                    htmlFor="password"
                    className="mb-2 text-sm text-start text-grey-900 flex justify-between"
                  >
                    Password*{" "}
                    <p
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-xl"
                    >
                      {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                    </p>
                  </label>
                  <input
                    {...register("password")}
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    placeholder="Enter a password"
                    className=" w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none   bg-gray-200 text-black rounded-2xl"
                  />
                  {errors.password && (
                    <p className="text-red-500">{errors.password.message}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-5 mb-5 text-sm font-bold  text-white  md:w-96 rounded-2xl bg-black hover:bg-gray-800"
                  >
                    <p className="flex justify-center">
                      {loading ? (
                        <CgSpinner className="text-white text-xl animate-spin font-bold" />
                      ) : (
                        "Sign Up"
                      )}{" "}
                    </p>
                  </button>
                  {error && (
                    <p className="text-red-500 mt-4 text-sm">{error}</p>
                  )}
                  <p className="text-sm leading-relaxed text-grey-900">
                    Already have an account.
                    <Link to="/login" className="font-bold text-blue-600">
                      &nbsp;Go to login page
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
