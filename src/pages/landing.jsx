import React from "react";
import landingPic from "../assets/Back_Top.svg";
import landingBottom from "../assets/Back_Bottom.svg";
import Navbar from "../components/navbar";
import Mom from "../assets/Mom.png";
import Pose from "../assets/Pose.png";
import Profile from "../assets/profile.png";
import Therapy from "../assets/ther.png";
import Activity from "../assets/ACT.png";
import Thoughts from "../assets/THOU.png";

function Landing() {
  return (
    <div className="h-screen">
      <div
        className="bg-cover bg-center bg-no-repeat h-full "
        style={{
          backgroundImage: `url(${landingPic})`,
        }}
      >
        <Navbar className="fixed top-0 left-0 w-full z-50 shadow-md" />
        <div className="flex flex-row ">
          <div className="px-64 items-start flex flex-col py-48 ">
            <div className="text-5xl font-bold text-pink-500">Mother Care</div>
            <div className="text-4xl font-bold pt-8 italic">
              Find yourself in the journey!
            </div>
            <div className="flex flex-row py-8">
              <button className="bg-[#FF9999] py-2 px-8 text-white rounded-full">
                Create Account
              </button>
              <button className="mx-4 px-16 border-2 border-black rounded-full">
                Login
              </button>
            </div>
          </div>
          <div className="w-1/6 py-36">
            <img src={Mom} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-rows justify-center">
        <div className="w-[15rem] mr-20">
          <img src={Pose} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="text-5xl font-bold pb-4">About Us</div>
          <div className="text-4xl font-bold py-2">
            Assitance before & <br /> After Pregnancy
          </div>
          <div className="font-light pt-6">
            "At Mothercare, we understand the transformative journey of
            pregnancy <br />
            and motherhood. Our platform is dedicated to <br />
            nurturing the well-being of expectant mothers through tailored
            <br />
            activities such as yoga, meditation, and curated reading
            <br /> materials. We strive to provide compassionate guidance to
            <br /> empower mothers in preventing postpartum depression and
            <br />
            fostering a positive transition into motherhood."
          </div>
        </div>
      </div>
      <div
        className="bg-cover bg-center bg-no-repeat h-full "
        style={{
          backgroundImage: `url(${landingBottom})`,
        }}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="pt-80 mt-24 text-white text-5xl font-bold">
            How it works
          </div>
          <div className="border-2 border-[#00FFC2] w-1/6 my-8"></div>
          <div className="flex flex-row py-8 items-center justify-center">
            <div className="w-1/6 px-8">
              <img src={Profile} alt="" />
              <div className="py-4 text-white flex items-center justify-center font-light text-xl">
                Create Profile
              </div>
            </div>
            <div className="w-1/6 px-8">
              <img src={Activity} alt="" />
              <div className="py-4 text-white flex items-center justify-center font-light text-xl">
                Activities
              </div>
            </div>
            <div className="w-1/6 px-8">
              <img src={Thoughts} alt="" />
              <div className="py-4 text-white flex items-center justify-center font-light text-xl">
                Journal your thoughts
              </div>
            </div>
            <div className="w-1/6 px-8">
              <img src={Therapy} alt="" />
              <div className="py-4 text-white flex items-center justify-center font-light text-xl">
                Therapy Assitance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
