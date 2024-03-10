import React from "react";

const MotherCare = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Mother Care</h1>
        <p className="text-lg mb-8 text-gray-600">
          Find yourself in the journey!!!
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center w-full max-w-2xl mb-8">
        <button className="w-full md:w-64 px-6 py-3 font-semibold text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 mr-4">
          CREATE ACCOUNT
        </button>
        <button className="w-full md:w-64 px-6 py-3 font-semibold text-gray-800 bg-white rounded-md shadow-md hover:bg-gray-100">
          Login
        </button>
      </div>

      <div className="w-full max-w-2xl">
        <nav className="flex items-center justify-center mb-8">
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Assistance Before & After Pregnancy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                How it works
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col md:flex-row md:justify-center w-full max-w-2xl mb-8">
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Create Profile
            </h2>
            <p className="text-gray-600">Personalize your experience.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Activities
            </h2>
            <p className="text-gray-600">
              Find and join activities that suit you.
            </p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Journal your thoughts
            </h2>
            <p className="text-gray-600">Track your thoughts and feelings.</p>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              Therapy assistance
            </h2>
            <p className="text-gray-600">
              Get professional help when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotherCare;
