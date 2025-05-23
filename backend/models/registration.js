import sequelize from "../db.js"
import DataTypes from "sequelize"
var moment = require('moment');
import Student from "./student.js"
import Course from "./course.js"
const Registration=sequelize.define('Registration',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  student_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
        model:'Student',
        key: 'id'
    }
  },
  course_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    references:{
        model:'Course',
        key: 'id'
    }
  },
  registered_at:{
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: moment.utc().format('YYYY-MM-DD HH:mm:ss'),
  }
},{
    indexes:[
        {
            unique: 'true',
            fields:['Student', 'Course']
        }
    ]
})
sequelize.sync().then(() => {
  console.log('Registration table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});