import React from "react";
import Image from "../assets/Mom.png";

const Login = () => {
  return (
    <>
      <div className="flex flex-row bg-[#FFF2F2] h-screen">
        <div className="flex-1 flex justify-center items-center">
          <img className="w-1/2" src={Image} alt="" />
        </div>
        <div className="flex-1 bg-white mx-64 my-48 flex-cols border-2 border-pink-300">
          <div className="px-16 pt-16 text-4xl font-bold">Login</div>
          <div className="px-16 pt-16 font-bold">
            Enter Username or Email
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="inputField"
              type="text"
              placeholder="Username or Email"
            />
          </div>
          <div className="px-16 pt-4 font-bold">
            Enter Password
            <input
              className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
              id="inputField"
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="flex flex-rows gap-x-4 px-16 pt-16">
            <div className="flex-1">
              <button className="bg-[#FF9999] py-1 w-full rounded-full">
                Signup
              </button>
            </div>
            <div className="flex-1">
              <button className="border-2 border-black py-1 w-full rounded-full">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;