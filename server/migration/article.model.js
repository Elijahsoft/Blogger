import { DataTypes } from "sequelize";
import sequelize from "./db";

// Table Article
export const Article = sequelize.define(
  "Article",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    subtitle: {
      type: DataTypes.STRING,
    },
    body: {
      type: DataTypes.STRING(1000),
    },
  },
  {
    sequelize,
  }
);
sequelize
  .sync()
  .then(() => console.log("tables are created"))
  .catch((error) => console.log(error.message));
