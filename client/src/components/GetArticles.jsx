import React, { useState, useEffect } from "react";
import axios from "axios";
import { ARTICLE_SERVER_URL } from "../util";
import { Link } from "react-router-dom";

const GetArticles = () => {
  const [articleDetail, setArticleDetail] = useState([]);

  const fetchArticles = async () => {
    const { data } = await axios.get(`${ARTICLE_SERVER_URL}/all`);
    setArticleDetail(data.article);
  };
  
  const makeUrl = (text) => {
    return text
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .split(" ")
      .join("-");
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div>
      {articleDetail.map((post) =>  (
          <>
            <div className="post-preview" key={post.id}>
              <Link
                to={`/blogger/view/${post.id}/${makeUrl(post.title)}/${makeUrl(post.subtitle)}/${makeUrl(post.body)}`}
              >
                <h2 className="post-title">{post.title}</h2>
                <h3 className="post-subtitle">{post.subtitle}</h3>
              </Link>
              <p className="post-meta">
                Posted by {post.author}&nbsp;{post.createdAt}
              </p>
            </div>

            <hr className="my-4" />
          </>
        )
      )}
    </div>
  );
};

export default GetArticles;
