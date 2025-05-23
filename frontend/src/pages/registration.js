import { useState } from "react";
import React from "react";

import { useEffect } from "react";

const Registration =  () => {
    // const [course,setCourse]=useState('')
    // const url = "http://localhost:4000/course";
    // try {
    //     const response = await fetch(url);
    //     if (!response.ok) {
    //     throw new Error(`Response status: ${response.status}`);
    //     }

    //     const data = await response.json();
    //     setCourse(data)
    // } catch (error) {
    //     console.error(error.message);
    // }
    return (
        <div>
            <h1>Class Registration</h1>
            <label for="cars"> Select Student:</label>

            <select name="cars" id="cars">
            <option value="volvo">--Select Student--</option>
            <option value="volvo">John - john@uic.edu</option>
            <option value="saab">Karen -  karen@uic.edu</option>
            <option value="mercedes">Joe -joe@uic.edu </option>
            
            </select>
            <label for="cars">Select Course:</label>
            <select name="cars" id="cars">
            <option value="volvo">--Select Courses--</option>
            <option value="volvo">Math 101</option>
            <option value="saab">CS 401</option>
            <option value="mercedes">Bio 201</option>
            
            </select>
            <div>
            <button>Submit</button>
            </div>

            <div>Registered Students and Courses</div>
            <div>

<table>

  <thead>
    <tr>
      <th scope="col">Student</th>
      <th scope="col">Email</th>
      <th scope="col">Course</th>
      <th scope="col">Registered At</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">John</th>
      <td>john@uic.edu</td>
      <td>Math 101</td>
      <td>13:45 05/23/2025</td>
    </tr>
    <tr>
      <th scope="row">Joe</th>
      <td>joe@uic.edu</td>
      <td>CS 401</td>
      <td>13:48 05/23/2025</td>
    </tr>
    
    
  </tbody>

</table>
            </div>
        </div>
    )
};
export default Registration;


// import React, { useState } from "react";
// import TutorialService from "../services/tutorial.service";
 
// function AddTutorial() {
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [submitted, setSubmitted] = useState(false);
 
//     const saveTutorial = () => {
//         const data = { title, description };
//         TutorialService.create(data)
//             .then((response) => {
//                 console.log(response.data);
//                 setSubmitted(true);
//             })
//             .catch((e) => {
//                 console.log(e);
//             });
//     };
 
//     const newTutorial = () => {
//         setTitle("");
//         setDescription("");
//         setSubmitted(false);
//     };
 
//     return (
//         <div className="max-w-sm mx-auto p-4 bg-white rounded shadow">
//             {submitted ? (
//                 <div>
//                     <h4 className="font-bold text-green-600 mb-4">
//                         Tutorial submitted successfully!
//                     </h4>
//                     <button
//                         className="bg-blue-500 text-white px-3 py-1 rounded"
//                         onClick={newTutorial}
//                     >
//                         Add Another
//                     </button>
//                 </div>
//             ) : (
//                 <div>
//                     <h4 className="font-bold text-xl mb-2">Add Tutorial</h4>
 
//                     <div className="mb-2">
//                         <label className="block mb-1 font-medium">Title</label>
//                         <input
//                             type="text"
//                             className="border border-gray-300 rounded w-full px-2 py-1"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                         />
//                     </div>
 
//                     <div className="mb-2">
//                         <label className="block mb-1 font-medium">Description</label>
//                         <input
//                             type="text"
//                             className="border border-gray-300 rounded w-full px-2 py-1"
//                             value={description}
//                             onChange={(e) => setDescription(e.target.value)}
//                         />
//                     </div>
 
//                     <button
//                         className="bg-green-500 text-white px-3 py-1 rounded mt-2"
//                         onClick={saveTutorial}
//                     >
//                         Submit
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
 
// export default AddTutorial;