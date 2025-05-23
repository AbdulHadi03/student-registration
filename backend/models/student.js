import sequelize from "../db.js"
import DataTypes from "Sequelize"
const Student=sequelize.define('Student',{
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        isEmail : true
    }
  }
})
sequelize.sync().then(() => {
  console.log('Student table created successfully!');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});
