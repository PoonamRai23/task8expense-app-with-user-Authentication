const sequelize=require('sequelize')
const Sequelize=require('../utill/user')
const expense=Sequelize.define('expense',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true,
        unique:true
    },
    itemname:{
        type:sequelize.STRING,
       
    },
    description:{
        type:sequelize.STRING,
       
    },
    category:{
        type:sequelize.STRING,
       
    }

})
module.exports=expense