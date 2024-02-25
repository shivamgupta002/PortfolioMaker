// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Registered = () => {
//   const history = useNavigate();
//   const [username, setUsername] = useState("");
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = await axios.get(`http://localhost:5000/data/${username}`);
//       // document.getElementById("usernameModal").modal("hide"); 
//       history("/portfolio");
//       console.log(data);
//     } catch (e) {
//       alert(e.message);
//     }
//   };
//   return (
//     <>
//       <div
//         class="modal fade"
//         id="usernameModal"
//         tabindex="-1"
//         aria-labelledby="usernameModalLabel"
//         aria-hidden="true"
//       >
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <h5 class="modal-title" id="usernameModalLabel">
//                 Enter UserName
//               </h5>
//               <button
//                 type="button"
//                 class="btn-close"
//                 data-bs-dismiss="modal"
//                 aria-label="Close"
//               ></button>
//             </div>
//             <div class="modal-body">
//               <form action="" method="post" onSubmit={handleSubmit}>
//                 {/* User Name */}
//                 <div className="col-sm-12 d-flex align-items-center">
//                   <label htmlFor="userName" className="form-label mx-4 py-2">
//                     UserName
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control mx-3"
//                     id="userName"
//                     placeholder="User Name"
//                     value={username}
//                     required
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                 </div>
//                 <div className="d-flex justify-content-center mt-3">
//                   <button type="submit" className="btn btn-primary">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Registered;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registered = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.get(`http://localhost:5000/data/${username}`);
      console.log(data);
      document.getElementById("closeModalButton").click(); // Close the modal
      history(`/portfolio/${username}`);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="usernameModal"
        tabIndex="-1"
        aria-labelledby="usernameModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="usernameModalLabel">
                Enter UserName
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                id="closeModalButton" // Add an ID for accessing in JavaScript
              ></button>
            </div>
            <div className="modal-body">
              <form action="" method="post" onSubmit={handleSubmit}>
                {/* User Name */}
                <div className="col-sm-12 d-flex align-items-center">
                  <label
                    htmlFor="userName"
                    className="form-label mx-4 py-2"
                  >
                    UserName
                  </label>
                  <input
                    type="text"
                    className="form-control mx-3"
                    id="userName"
                    placeholder="User Name"
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registered;
