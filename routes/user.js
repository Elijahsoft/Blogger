import express from "express";
import {
  signup,
  testjoi,
  getAllUsers,
  signin,
} from "../controller/user.controller";
import { checkAge } from "../middleware/authentication";

const userRoutes = express.Router();
userRoutes.get("/all", getAllUsers);
userRoutes.post("/signup", signup);
userRoutes.post("/signin", signin);
userRoutes.post('/age',checkAge,(req,res)=> res.send({message :"Age is equal or Over 26"}));

userRoutes.put("/:id", (req, res) => {});


export { userRoutes };
