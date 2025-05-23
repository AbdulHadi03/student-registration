import sequelize from "../db.js"
import Student from "./student.js"
import Course from "./course.js"
import Registration from "./registration.js"

Student.hasMany(Registration, {foreignKey: 'id', onDelete: 'CASCADE'});
Course.hasMany(Registration, {foreignKey: 'id', onDelete: 'CASCADE'});
Registration.belongsTo(Student, { foreignKey: 'id' });
Registration.belongsTo(Course, { foreignKey: 'id' });

export {sequelize, Student, Course, Registration}
