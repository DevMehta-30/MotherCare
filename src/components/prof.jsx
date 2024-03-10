import React from "react";
import Med from "../assets/Med.png";
import Yoga from "../assets/Yog.png";
import Read from "../assets/Read.png";
import Food from "../assets/Food.png";
import Journal from "../assets/Jour.png";
import Music from "../assets/Mus.png";

function Prof({ setShowYoga }) {
  return (
    <>
      <div className="flex flex-col px-8 py-4">
        <div className="font-bold text-3xl ">Activities</div>
        <div className="flex flex-col py-2">
          <div className="flex-1 flex flex-row">
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Med} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Meditation
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Yoga} alt="" />
              <button
                className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center"
                onClick={() => setShowYoga(true)}
              >
                Yoga
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Read} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Reading Section
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-row py-10">
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Food} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Food
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Journal} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Journal
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Music} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Music
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prof;
