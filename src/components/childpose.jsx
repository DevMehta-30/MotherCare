// import React from "react";
// import Med from "../assets/yog1.png";

// function ChildPose() {
//   return (
//     <div className="flex flex-col px-8 py-4">
//       <div className="font-bold text-3xl px-8">Child Pose</div>
//       <div className="flex flex-row p-8 gap-x-16">
//         <div className="flex flex-col gap-y-28">
//           <div>
//             1. Start by kneeling on a soft surface such as a yoga <br /> mat,
//             ensuring your knees are hip-width apart.
//           </div>
//           <div>
//             2. Lower your torso forward, gently resting your <br />
//             forehead on the mat or a cushion placed between
//             <br /> your thighs if needed, allowing your belly to
//             <br /> comfortably hang between your thighs.
//           </div>
//           <div>
//             3. Extend your arms forward or alongside your
//             <br /> body, whichever feels more comfortable, while
//             <br /> keeping your palms facing down.
//           </div>
//           <div>
//             4. Hold the pose for as long as feels comfortable,
//             <br /> breathing deeply and allowing your body to
//             <br /> relax fully.To release, gently walk your hands
//             <br /> back towards your body, slowly lifting your
//             <br /> torso upright.
//           </div>
//         </div>
//         <div className="flex-1 flex flex-col">
//           <div className="flex-1 flex justify-center items-center">
//             <img className="w-1/3 bg-[#FFF4F4]" src={Med} alt="" />
//           </div>
//           <div className="flex-1 justify-center text-center items-center w-1/3">
//             Cautions:
//             <div>
//               1. Avoid overstretching: While gentle stretching can be
//               beneficial, avoid overstretching or pushing your body too far,
//               especially during pregnancy when ligaments are more relaxed. Focus
//               on maintaining a comfortable stretch without straining.
//             </div>
//             <div>
//               2. Be mindful of your belly: As your pregnancy progresses, your
//               belly grows, and you may need to adjust the width of your knees or
//               the placement of your belly to ensure comfort and avoid
//               compression.
//             </div>
//             <div>
//               3. Stay hydrated: Drink plenty of water before, during, and after
//               practicing the Child's Pose to stay hydrated and support overall
//               well-being.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChildPose;
import React from "react";
import Med from "../assets/yog1.png";

function ChildPose({ goBackToYoga }) {
  return (
    <div className="flex flex-col px-8 py-4">
      <div className="flex flex-rows">
        <div className="flex-1 font-bold text-3xl">Yoga</div>
        <button
          className="flex-end pr-48 font-bold text-3xl "
          onClick={goBackToYoga}
        >
          Back
        </button>
      </div>
      <div className="flex flex-row py-8 gap-x-16">
        <div className="flex flex-col gap-y-28">
          <div>
            1. Start by kneeling on a soft surface such as a yoga <br /> mat,
            ensuring your knees are hip-width apart.
          </div>
          <div>
            2. Lower your torso forward, gently resting your <br />
            forehead on the mat or a cushion placed between
            <br /> your thighs if needed, allowing your belly to
            <br /> comfortably hang between your thighs.
          </div>
          <div>
            3. Extend your arms forward or alongside your
            <br /> body, whichever feels more comfortable, while
            <br /> keeping your palms facing down.
          </div>
          <div>
            4. Hold the pose for as long as feels comfortable,
            <br /> breathing deeply and allowing your body to
            <br /> relax fully.To release, gently walk your hands
            <br /> back towards your body, slowly lifting your
            <br /> torso upright.
          </div>
        </div>
        <div className="flex-1 flex flex-col ">
          <div className="flex-1 flex justify-center items-center">
            <img className="w-1/2 bg-[#FFF4F4]" src={Med} alt="" />
          </div>
          <div className="flex-1 justify-center items-center ">
            <div>
              <div className="font-bold">Cautions:</div>
              <div className="py-2">
                1. Avoid overstretching: While gentle stretching can be
                beneficial, avoid overstretching or pushing your body too far,
                especially during pregnancy when ligaments are more relaxed.
                Focus on maintaining a comfortable stretch without straining.
              </div>
              <div className="py-2">
                2. Be mindful of your belly: As your pregnancy progresses, your
                belly grows, and you may need to adjust the width of your knees
                or the placement of your belly to ensure comfort and avoid
                compression.
              </div>
              <div className="py-2">
                3. Stay hydrated: Drink plenty of water before, during, and
                after practicing the Child's Pose to stay hydrated and support
                overall well-being.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChildPose;
