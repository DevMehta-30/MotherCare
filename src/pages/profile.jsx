// import React, { useState } from "react";
// import Sidebar from "../components/sidebar";
// import Prof from "../components/prof";
// import Yogaa from "../components/yogaa";
// import ChildPose from "../components/childpose";

// function Profile() {
//   const [showYoga, setShowYoga] = useState(false);
//   const [showChildPose, setShowChildPose] = useState(false);

//   return (
//     <div className="flex">
//       <Sidebar />
//       <div className="w-5/6">
//         {showYoga ? (
//           showChildPose ? (
//             <ChildPose />
//           ) : (
//             <Yogaa setShowChildPose={setShowChildPose} />
//           )
//         ) : (
//           <Prof setShowYoga={setShowYoga} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Profile;
import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Prof from "../components/prof";
import Yogaa from "../components/yogaa";
import ChildPose from "../components/childpose";

function Profile() {
  const [showYoga, setShowYoga] = useState(false);
  const [showChildPose, setShowChildPose] = useState(false);

  const goBackToProf = () => {
    setShowYoga(false);
    setShowChildPose(false);
  };

  const goBackToYoga = () => {
    setShowYoga(true);
    setShowChildPose(false);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-2/6"></div>
      <div className="flex-4/6">
        {showYoga ? (
          showChildPose ? (
            <ChildPose goBackToYoga={goBackToYoga} />
          ) : (
            <Yogaa
              setShowChildPose={setShowChildPose}
              goBackToProf={goBackToProf}
            />
          )
        ) : (
          <Prof setShowYoga={setShowYoga} />
        )}
      </div>
    </div>
  );
}

export default Profile;
