import { useState } from "react";
import React from "react";

import { useEffect } from "react";

const Course = async () => {
    const [course,setCourse]=useState('')
    const url = "http://localhost:4000";
    try {
        const response = await fetch(url);
        if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
        }
        console.log('Connected')
        // const data = await response.json();
        // setCourse(data)
    } catch (error) {
        console.error(error.message);
    }
    return (
        <div>
            <h1>Courses</h1>
            <table>
            <tr className="table-row">
                <td>Math 101</td>
                <td>Math 101 explains formulas</td>
             </tr>
             <tr className="table-row">
                <td>CS 401</td>
                <td>CS explain cs topics</td>
             </tr>
             <tr className="table-row">
                <td>Bio 201</td>
                <td>Explains biological topics</td>
             </tr>
            </table>
        </div>
    )
};
export default Course;


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