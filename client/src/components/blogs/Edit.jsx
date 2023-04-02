import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import img from "../../assets/img/post-sample-image.jpg";


const Edit = () => {
  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }

  useEffect(() => {
    document.title = "LBlog |  Edit ";
  });
  
    const { id, articleTitle, articleSubtitle, articleBody } = useParams();
    const title = articleTitle.split("-").join(" ");
    const subtitle = articleSubtitle.split("-").join(" ");
    const body = articleBody.split("-").join(" ");

   
       
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
          <form>
          <div className="form-floating" key={id}>
            <input
              className="form-control"
              id="Title"
              type="text"
              placeholder="Enter your Title..."
              
              defaultValue={title}
            />
            <label className="px-2" htmlFor="Title">
              Title
            </label>
            <div className="invalid-feedback" data-sb-feedback="title:required">
              A Title is required.
            </div>
          </div>

          <div className="form-floating">
            <input
              className="form-control"
              id="subtitle"
              type="text"
              placeholder="Enter your subtitle..."
              
              defaultValue={subtitle}
            />
            <label className="px-2" htmlFor="subtitle">
              Subtitle
            </label>
          </div>

          <div className="form-floating">
            <textarea
              className="form-control"
              id="body"
              placeholder="Enter your body here..."
              style={{ height: " 12rem" }}
              
              defaultValue={body}
            ></textarea>
            <label className="px-2" htmlFor="body">
              Body
            </label>
          </div>
          <br />
          <button
            className="btn btn-primary text-uppercase "
            id="submitButton"
            type="submit"
          >
            Edit
          </button>
        </form>
     
          </div>
        </div>
      </div>
    </>
  );
};
export default Edit;
