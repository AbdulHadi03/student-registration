// import Student from "./models/student.js";
// import Course from "./models/course.js";
// import Registration from "./models/registration.js";
import express from 'express';
import sequelize from '../backend/db.js';
import cors from 'cors';
const app = express();
app.use(cors());

app.get('/courses', async (req, res) => {
    const Course=await Course.findAll()
    res.json(Course);
  });
app.get('/student', async (req, res) => {
    console.log(req)
    try{
    const Student="hello"
    }
    catch(err){
        res.json(err)
    }
    let val='{"name":"John", "age":30, "car":null}'
    return res.json(val)
  });
app.get('/registration',async (req, res) => {
    const value=await Registration.findAll();
    res.json(value);
  });

app.post('/registration/:id', async(req,res)=>{

    console.log(req)
    const add={
        student_id: req.student_id,
        course_id: req.course_id,
        registered_at: req.registered_at
    }
    const value=await Registration.create(add)
    res.json(value)
});
app.put('/registration/:id', async(req, res)=>{
    id=req.params.id
    const value=await Registration.findByPk(id)
    value.student_id=req.student_id
    value.course_id=req.course_id
    // await res.shouldKeepAlive()
    res.json(value)
});
app.delete('/registration/:id', async(req,res)=>{
    id=req.params.id
    const val=Registration.destroy({where : {id:id}})
    res.json(val)
})
sequelize.sync().then(() => {
    console.log("Synced db.");
});
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
 


 
//     // Create a Tutorial
//     const tutorial = {
//         title: req.body.title,
//         description: req.body.description,
//         published: req.body.published ? req.body.published : false,
//     };
 
//     // Save Tutorial in the database
//     Tutorial.create(tutorial)
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while creating the Tutorial.",
//             });
//         });
// };
 
// // Retrieve all Tutorials
// export const findAll = (req, res) => {
//     // Allow a filter condition via query parameter
//     const title = req.query.title;
//     const condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
 
//     Tutorial.findAll({ where: condition })
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving tutorials.",
//             });
//         });
// };
 
// // Find a single Tutorial by ID
// export const findOne = (req, res) => {
//     const id = req.params.id;
 
//     // Find Tutorial by primary key
//     Tutorial.findByPk(id)
//         .then((data) => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(404).send({
//                     message: `Cannot find Tutorial with id=${id}.`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Error retrieving Tutorial with id=" + id,
//             });
//         });
// };
 
// // Update a Tutorial by ID
// export const update = (req, res) => {
//     const id = req.params.id;
 
//     // Update the Tutorial with the specified ID
//     Tutorial.update(req.body, {
//         where: { id: id },
//     })
//         .then((num) => {
//             if (num === 1) {
//                 res.send({
//                     message: "Tutorial was updated successfully.",
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Error updating Tutorial with id=" + id,
//             });
//         });
// };
 
// // Delete a Tutorial by ID
// export const deleteOne = (req, res) => {
//     const id = req.params.id;
 
//     // Delete the Tutorial with the specified ID
//     Tutorial.destroy({
//         where: { id: id },
//     })
//         .then((num) => {
//             if (num === 1) {
//                 res.send({
//                     message: "Tutorial was deleted successfully!",
//                 });
//             } else {
//                 res.send({
//                     message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
//                 });
//             }
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: "Could not delete Tutorial with id=" + id,
//             });
//         });
// };
 
// // Delete all Tutorials
// export const deleteAll = (req, res) => {
//     // Delete all Tutorials
//     Tutorial.destroy({
//         where: {},
//         truncate: false,
//     })
//         .then((nums) => {
//             res.send({ message: `${nums} Tutorials were deleted successfully!` });
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message:
//                     err.message || "Some error occurred while removing all tutorials.",
//             });
//         });
// };
 
// // Find all published Tutorials
// export const findAllPublished = (req, res) => {
//     // Find all Tutorials with published = true
//     Tutorial.findAll({ where: { published: true } })
//         .then((data) => {
//             res.send(data);
//         })
//         .catch((err) => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving tutorials.",
//             });
//         });
// };