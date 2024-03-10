import React from "react";

function navbar() {
  return (
    // <div className="flex w-screen py-4 px-16 bg-[#FFF4F4]  text-xl flex-cols">
    //   <div className=" font-bold ">MotherCare.</div>
    //   <div className="place-content-center">About us</div>
    // </div>
    <header className="bg-[#FFF4F4] px-16 py-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">MotherCare</h1>
      <nav className="flex space-x-4 ">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          About
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </nav>
      {/* <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Create Account
        </button>
        <button className="bg-transparent border border-white hover:bg-white hover:text-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </div> */}
    </header>
  );
}

export default navbar;
