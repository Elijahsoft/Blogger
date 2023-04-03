import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetArticles from "../components/GetArticles";
import img from ".././assets/img/home-bg.jpg";
import ".././assets/style.css";
const Home = () => {
  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }

  useEffect(() => {
    document.title = "LBlog |  Home ";
  });

  const user = localStorage.getItem("user");
  const full = JSON.parse(user);
  const { fullNames } = full;

  return (
    <div>
      <Nav />

      <header className="masthead" style={{ backgroundImage: `url(${img})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">Welcome {fullNames} 👋🏼</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            <GetArticles />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
