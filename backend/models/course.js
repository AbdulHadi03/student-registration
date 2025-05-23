import sequelize from "../db.js"
import DataTypes from "sequelize"
const Course=sequelize.define('Course',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        isEmail : true
    }
  }
});
sequelize.sync().then(() => {
  console.log('Course table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});