import React from "react";

function navbar() {
  return (
    <header className="bg-[#FFF4F4] px-16 py-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">MotherCare</h1>
      <nav className="flex space-x-4 ">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="" className="hover:underline">
          About
        </a>
        <a href="" className="hover:underline">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default navbar;
