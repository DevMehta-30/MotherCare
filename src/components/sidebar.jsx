// import React from "react";
// import Image from "../assets/Mom.png";

// function sidebar() {
//   return (
//     <>
//       <div className="mr-12 h-screen bg-[#FFF4F4] flex flex-col justify-center items-center font-bold">
//         <div className="flex-1 flex flex-col py-8 items-center">
//           <div>My Profile</div>
//           <div className="py-4 flex justify-center">
//             <img className="w-1/2 " src={Image} alt="" />
//           </div>
//           <div className="py-4 text-2xl">Veena Rathi</div>
//           <div className="text-xl">62 days left</div>
//         </div>
//         <div className="flex-1 flex flex-col pt-80 items-center">
//           <div className="py-2">
//             <a href="" className="hover:underline">
//               Home
//             </a>
//           </div>
//           <div className="py-2">
//             <a href="" className="hover:underline">
//               Settings
//             </a>
//           </div>
//           <div className="py-2">
//             <a href="" className="hover:underline">
//               Contacts
//             </a>
//           </div>
//           <div className="py-2">
//             <a href="/" className="hover:underline">
//               Logout
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default sidebar;
import React from "react";
import Image from "../assets/Mom.png";

function Sidebar() {
  return (
    <div className="w-2/6 h-screen bg-[#FFF4F4] flex flex-col justify-center items-center font-bold">
      <div className="flex-1 flex flex-col py-8 items-center">
        <div>My Profile</div>
        <div className="py-4 flex justify-center">
          <img className="w-1/2" src={Image} alt="" />
        </div>
        <div className="py-4 text-2xl">Veena Rathi</div>
        <div className="text-xl">62 days left</div>
      </div>
      <div className="flex-1 flex flex-col pt-80 items-center">
        <div className="py-2">
          <a href="" className="hover:underline">
            Home
          </a>
        </div>
        <div className="py-2">
          <a href="" className="hover:underline">
            Settings
          </a>
        </div>
        <div className="py-2">
          <a href="" className="hover:underline">
            Contacts
          </a>
        </div>
        <div className="py-2">
          <a href="/" className="hover:underline">
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
