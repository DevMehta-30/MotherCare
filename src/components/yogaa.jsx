import React from "react";
import Med from "../assets/yog1.png";
import Yoga from "../assets/yog2.png";
import Read from "../assets/yog3.png";
import Food from "../assets/yog4.png";
import Journal from "../assets/yog5.png";
import Music from "../assets/yog6.png";

function yogaa({ setShowChildPose, goBackToProf }) {
  return (
    <>
      <div className="flex flex-col px-8 py-4">
        <div className="flex flex-rows">
          <div className="flex-1 font-bold text-3xl">Yoga</div>
          <button
            className="flex-end pr-48 font-bold text-3xl "
            onClick={goBackToProf}
          >
            Back
          </button>
        </div>

        <div className="flex flex-col py-2">
          <div className="flex-1 flex flex-row">
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Med} alt="" />
              <button
                className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center"
                onClick={() => setShowChildPose(true)}
              >
                Child Pose
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Yoga} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Bridge Pose
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Read} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Garland Pose
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-row py-10">
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Food} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Butterfly Pose
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Journal} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                Ankle Rotation
              </button>
            </div>
            <div className="flex-1 flex-col justify-center items-center">
              <img className="w-2/3 bg-[#FFF4F4] p-4" src={Music} alt="" />
              <button className="bg-[#F38FB1] w-2/3 py-3 rounded-full my-3 font-bold justify-center">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default yogaa;
