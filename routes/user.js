import express from "express";
import {
  signup,
  testjoi,
  getAllUsers,
  signin,
} from "../controller/user.controller";
const userRoutes = express.Router();

userRoutes.get("/all", getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/signin", signin);

userRoutes.put("/:id", (req, res) => {});
userRoutes.post("/joi", testjoi);

export { userRoutes };
