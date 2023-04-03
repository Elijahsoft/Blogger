import React, { useEffect, useState } from "react";
import "../../assets/style.css";
import img from "../../assets/img/post-sample-image.jpg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ARTICLE_SERVER_URL } from "../../util";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const ViewArticle = () => {
  const { id,articleTitle,articleSubtitle,articleBody } = useParams();
  if(!id){
    window.location.replace("/");

  }

  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }
const deleteArticle =  async() =>{
const {data} = await axios.delete(`${ARTICLE_SERVER_URL}/delete/${id}`)
if(data.message){
  toast(data.message)
}
setInterval(() => {
  window.location.replace("/");
}, 6000);
}
  useEffect(() => {
    document.title = "LBlog |  View ";
  });

  const GetArticle = () => {
    const title = articleTitle.split("-").join(" ");
    const subtitle = articleSubtitle.split("-").join(" ");
    const body = articleBody.split("-").join(" ");
    return (
      <>
      <ToastContainer/>
        <div className="post-preview" key={id}>
          <h2 className="post-title fs-1">
           {title}
          </h2>
          <h4 className="post-subtitle">
            {subtitle}
          </h4>

          <p className="post-body">
           {body}
          </p>
          
          <Link to={`/blogger/view/edit/${id}`} className="btn btn-primary">
              
              Edit
          </Link>
          <button onClick={deleteArticle}  className="btn btn-danger mx-3">
              
              Delete
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <Nav />
      <header
        className="masthead"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="masthead-heading">
                <span className="text-uppercase text-white fs-3">Read</span>
              </h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row   justify-content-center">
          <div className="">
            <GetArticle />

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewArticle;
