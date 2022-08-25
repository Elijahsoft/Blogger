import { DataTypes } from "sequelize";
import sequelize from "./db";
import { User } from "./user.model";
export const Article = sequelize.define('Article',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    title:{
        type: DataTypes.STRING
    },
    body:{
        type: DataTypes.STRING
    }
}, 
{
    sequelize
});
sequelize.sync().then(()=> console.log('tables are created')).catch(error=>console.log(error.message))


