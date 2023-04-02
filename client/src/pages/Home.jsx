import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import axios from "axios";
import { ARTICLE_SERVER_URL } from "../util";
import { SERVER_URL } from "../util";
import img from ".././assets/img/home-bg.jpg";
import ".././assets/style.css";
const Home = () => {
  const [articleDetail, setArticleDetail] = useState([]);
  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }

  useEffect(() => {
    document.title = "LBlog |  Home ";
  });

  const user = localStorage.getItem("user");
  const full = JSON.parse(user);

  const { fullNames } = full;

  // Once everything works, put this function outside of useEffect hook

  const GetArticles = () => {
    useEffect(() => {
      const articleData = async () => {
        const { data } = await axios.get(`${ARTICLE_SERVER_URL}/all`);
        // Why stringifying this data.
        const information = JSON.stringify(data.article);
        const article = JSON.parse(information);

        setArticleDetail(article);
      };
      articleData();
    }, []);
    /**
     * TODO:
     * Possible solutions:
     * 1. create a hook and call it articleDetail
     * 2. create a function to filter clicked article ex: articles.fitler(article => article.id === givenArticleId)
     * 3. Redirect to article detail Page and pass that chosen article as route parameter
     * [hint: in react router dom read how you can send data as parameter]
     *
     * N.B: PLEASE DO NOT CALL BACKEND SERVER TO GET ARTICLE DETAIL, use mentioned steps instead
     *  */
    return (
      <div>
        {articleDetail.map((post) => {
          const title = post.title;
          const subtitle = post.subtitle;
          const body = post.body;

          const titleURL = title.replace(/[^a-zA-Z0-9 ][?.,]/g, '').split(" ").join("-");
          const subtitleURL = subtitle.replace(/[^a-zA-Z0-9 ]/g, '').split(" ").join("-");
          const bodyURL = body.replace(/[^a-zA-Z0-9 ]/g, '').split(" ").join("-");
          return (
            <>
              <div className="post-preview" key={post.id}>
                <a
                  href={`/blogger/view/${post.id}/${titleURL}/${subtitleURL}/${bodyURL}`}
                >
                  <h2 className="post-title">{post.title}</h2>
                  <h3 className="post-subtitle">{post.subtitle}</h3>
                </a>
                <p className="post-meta">
                  Posted by
                  <a href="#!"> {fullNames} </a>
                  {post.createdAt}
                </p>
              </div>

              <hr className="my-4" />
            </>
          );
        })}
      </div>
    );
  };

  // GetArticles()

  return (
    <div>
      <Nav />

      <header className="masthead" style={{ backgroundImage: `url(${img})` }}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="site-heading">
                <h1>Clean Blog</h1>
                <span className="subheading">By {fullNames}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Main Content--> */}

      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-md-10 col-lg-8 col-xl-7">
            {/* <!-- Post preview--> */}
            <GetArticles />
          </div>
        </div>
      </div>
      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
};

export default Home;
