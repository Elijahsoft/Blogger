import React, { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import img from "../../assets/img/post-sample-image.jpg";
import axios from "axios";
import { ARTICLE_SERVER_URL } from "../../util";

import Article from "../../components/Article";

const Edit = () => {
  const { id } = useParams();
  if (!id) {
    window.location.replace("/");
  }
  const [articleDetail, setArticleDetail] = useState([]);

  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }

  const getArticle = async () => {
    const { data } = await axios.get(`${ARTICLE_SERVER_URL}/view/${id}`);
    setArticleDetail(data.article);
  };

  useEffect(() => {
    document.title = "LBlog |  Edit ";
    getArticle();
  }, []);

  return (
    <>
      <header
        className="masthead"
        style={{
          backgroundImage: `url(${img})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>Edit blog value</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row gx-4 gx-lg-5 justify-content-center ">
        <div className="col-md-10 col-lg-8 col-xl-7 border">
          <div className="my-5 ">
            <Article articleDetail={articleDetail} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit;
