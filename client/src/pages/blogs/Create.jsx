import React, { useCallback, useEffect, useState } from "react";
import "../../assets/style.css";
import img from "../../assets/img/post-sample-image.jpg";
import axios from "axios";
import { ARTICLE_SERVER_URL } from "../../util";
import { toast, ToastContainer } from "react-toastify";
import Nav from "../../components/Nav";

const Create = () => {
  const [articleData, setArticleData] = useState({});
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = parseInt(user.id);
  const author = user.fullNames;
  useEffect(() => {
    document.title = "LBlog |  Create ";
  });
  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }


 
  
   const handleChange = useCallback(
    (e) => {
      setArticleData({
        ...articleData,
        [e.target.name]: e.target.value,
        UserId: userId,
        author: author,
      });
    },
    [articleData]
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      `${ARTICLE_SERVER_URL}/create`,
      articleData
    );
    if (data.error) {
      toast(data.error);
    } else {
      toast("Article Created successful");
      setInterval(() => {
        window.location.replace("/");
      }, 6000);
    }
  };
  
  return (
    <>
      <Nav />
      <header className="masthead" style={{ backgroundImage: `url(${img})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-5 col-lg-8 col-xl-7">
              <div className="page-heading">
                <h1>Create new blog</h1>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="row gx-4 gx-lg-5 justify-content-center ">
        <div className="col-md-10 col-lg-8 col-xl-7 border">
          <div className="my-5 ">
            <form>
              <div className="form-floating">
                <input
                  className="form-control"
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Enter your Title..."
                  data-sb-validations="required"
                />

                <label className="px-2" htmlFor="Title">
                  Title
                </label>
              </div>

              <div className="form-floating">
                <input
                  className="form-control"
                  name="subtitle"
                  onChange={handleChange}
                  type="text"
                  placeholder="Enter your subtitle..."
                  data-sb-validations="required"
                />
                <label className="px-2" htmlFor="subtitle">
                  Subtitle
                </label>
              </div>

              <div className="form-floating">
                <textarea
                  className="form-control"
                  name="body"
                  onChange={handleChange}
                  placeholder="Enter your body here..."
                  style={{ height: " 12rem" }}
                  data-sb-validations="required"
                ></textarea>
                <label className="px-2" htmlFor="body">
                  Body
                </label>
              </div>
              <br />

              <button
                className="btn btn-primary text-uppercase "
                type="submit"
                onClick={handleSubmit}
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Create;
