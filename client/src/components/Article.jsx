import React, { useState } from "react";
import { ARTICLE_SERVER_URL } from "../util";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const Article = ({ articleDetail }) => {
  if(articleDetail == undefined){
    window.location.replace("/")
  }

  const [inputValue, setInputValue] = useState(articleDetail);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };
  const handleUpdate = async () => {
    const { data } = await axios.put(
      `${ARTICLE_SERVER_URL}/update/${articleDetail.id}`,
      inputValue
    );

    if (data.message) {
      toast(data.message);
    }
    setInterval(() => {
      window.location.replace("/");
    }, 6000);
  };
  return (
    <div>
      <ToastContainer />
      <form>
        <div className="form-floating">
          <input
            className="form-control"
            name="title"
            type="text"
            placeholder="Enter your Title..."
            defaultValue={articleDetail.title}
            onChange={handleChange}
          />
          <label className="px-2" htmlFor="Title">
            Title
          </label>
        </div>

        <div className="form-floating">
          <input
            className="form-control"
            name="subtitle"
            type="text"
            placeholder="Enter your subtitle..."
            defaultValue={articleDetail.subtitle}
            onChange={handleChange}
          />
          <label className="px-2" htmlFor="subtitle">
            Subtitle
          </label>
        </div>

        <div className="form-floating">
          <textarea
            className="form-control"
            name="body"
            placeholder="Enter your body here..."
            style={{ height: " 12rem" }}
            defaultValue={articleDetail.body}
            onChange={handleChange}
          ></textarea>
          <label className="px-2" htmlFor="body">
            Body
          </label>
        </div>
        <br />
      </form>
      <button
        className="btn btn-primary text-uppercase "
        onClick={handleUpdate}
      >
        Edit
      </button>
    </div>
  );
};

export default Article;
