import { DataTypes } from "sequelize";
import { Article } from "./article.model";
import sequelize from "./db";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullNames: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    userType:{type: DataTypes.STRING}
  },
  {
    sequelize,
  }
);
sequelize
  .sync()
  .then(() => console.log("tables are created"))
  .catch((error) => console.log(error.message));
User.hasMany(Article)
export { User };
