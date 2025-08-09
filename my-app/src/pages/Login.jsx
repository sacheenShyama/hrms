import React, { useState } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { login } from "../services/api";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   const { setUser } = useContext(AuthContext);
  //   const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="bg-white rounded-lg py-5 min-h-screen flex flex-col justify-center">
        <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5">
            <div className="flex items-center justify-center w-full lg:p-12">
              <div className="flex items-center xl:p-10">
                <form
                  onSubmit={handleLogin}
                  className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
                >
                  <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">
                    Sign In
                  </h3>
                  <p className="mb-4 text-grey-700">
                    Enter your email and password
                  </p>
                  <button
                    type="button"
                    className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300"
                  >
                    <FcGoogle className="text-xl" /> &nbsp; Sign in with Google
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
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@loopple.com"
                    className=" w-full px-5 py-4 mr-2 text-sm font-medium outline-none  mb-7  bg-gray-200 text-black rounded-2xl"
                  />
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
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter a password"
                    className=" w-full px-5 py-4 mb-5 mr-2 text-sm font-medium outline-none   bg-gray-200 text-black rounded-2xl"
                  />

                  <button
                    type="submit"
                    className="w-full px-6 py-5 mb-5 text-sm font-bold  text-white  md:w-96 rounded-2xl bg-black hover:bg-gray-800"
                  >
                    Sign In
                  </button>
                  <p className="text-sm leading-relaxed text-grey-900">
                    Not registered yet?
                    <span className="font-bold text-blue-600">
                      &nbsp;Just put email & password
                    </span>
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

export default Login;
