import React from "react";
import Image from "../assets/Mom.png";
import Navbar from "../components/navbar";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row bg-[#FFF2F2] overscroll-y-none">
        <div className="flex-1 flex justify-center items-center">
          <img className="w-2/3" src={Image} alt="" />
        </div>
        <div className="flex-1 bg-white mx-64 my-36 flex-cols border-2 border-pink-300">
          <div className="px-16 pt-8 text-4xl font-bold">SignUp</div>
          <div className="px-16 pt-8 font-bold">
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
          <div className="px-16 pt-4 font-bold flex flex-rows gap-x-4">
            <div className="flex-1">
              Enter Months
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="inputField"
                type="text"
                placeholder="Months"
              />
            </div>
            <div className="flex-1">
              Enter Days
              <input
                className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline my-2"
                id="inputField"
                type="text"
                placeholder="Days"
              />
            </div>
          </div>
          <div className="flex flex-rows gap-x-4 px-16 py-16">
            <div className="flex-1">
              <button className="border-2 border-black py-2 w-full rounded-full">
                Submit
              </button>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
