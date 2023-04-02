import express from "express";
import { userRoutes } from "./routes/user";
import { articleRoute } from "./routes/article";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/article", articleRoute);

app.listen(3001, () => {
  console.log("Running");
});
