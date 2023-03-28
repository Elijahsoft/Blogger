import express from "express";
import morgan from "morgan";
import { userRoutes } from "./routes/user";
import { articleRoute } from "./routes/article";


const app = express();
app.set("view engine","ejs")
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"))

app.get("/", (req,res)=>{
  res.render('index',{title:"Home"});
});
app.get("/about", (req,res)=>{
  res.render('about',{title:"About Us"});
});
app.get("/post", (req,res)=>{
  res.render('post',{title:"Sample Post"});
});
app.get("/contact", (req,res)=>{
  res.render('contact',{title:"Contact"});
});

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/article", articleRoute);

app.listen(3001, () => {
  console.log("Running");
});
