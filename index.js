import express from "express";
import bodyParser from "body-parser";
import { userRoutes } from "./routes/user";
import { articleRoute } from "./routes/article";

const app = express();
app.use(bodyParser.json());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/article", articleRoute);

app.listen(3000, () => {
  console.log("Running");
});
