import Sequelize from "sequelize"
const sequelize=new Sequelize('dbase',"root","password",{
    host:"localhost",
    dialect:"mysql"
})

export default sequelize;