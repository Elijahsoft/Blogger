import React, { useEffect, useState } from "react";
import "../../assets/style.css";
import img from "../../assets/img/post-sample-image.jpg";
import Footer from "../Footer";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import axios from "axios";
import { ARTICLE_SERVER_URL } from "../../util";
/**
 *
 * Rename this component to ViewArticle or ArticleDetail
 */
const ViewArticle = () => {
  const [article, setArticle] = useState([]);
  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }

  useEffect(() => {
    document.title = "LBlog |  View ";
  });

  const GetArticle = () => {
    const { id,articleTitle,articleSubtitle,articleBody } = useParams();
    const title = articleTitle.split("-").join(" ");
    const subtitle = articleSubtitle.split("-").join(" ");
    const body = articleBody.split("-").join(" ");

    const titleURL = title.replace(/[^a-zA-Z0-9 ]/g, '').split(" ").join("-");
    const subtitleURL = subtitle.replace(/[^a-zA-Z0-9 ]/g, '').split(" ").join("-");
    const bodyURL = body.replace(/[^a-zA-Z0-9 ]/g, '').split(" ").join("-");
    return (
      <>
        <div className="post-preview" key={id}>
          <h2 className="post-title fs-1">
           {title}
          </h2>
          <h4 className="post-subtitle">
            {subtitle}
          </h4>

          <p className="post-meta">
           {body}
          </p>
          
          <a href={`/blogger/view/edit/${id}/${titleURL}/${subtitleURL}/${bodyURL}`} className="btn btn-primary">
              
              Edit
            </a>
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
            {/* <!-- Post preview--> */}
            <GetArticle />

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewArticle;
