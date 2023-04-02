import React, { useEffect }  from "react";
import Nav from "../components/Nav";

import Footer from "../components/Footer";
import img from '.././assets/img/Notfound.jpg';
import  '.././assets/style.css';
const Home = () => {
  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin")
  } 

  useEffect(() => {
    document.title = "LBlog |  Not Found  ";
  });
  return (
    <div>
      <header className="masthead  d-flex align-items-center" style={{backgroundImage:`url(${img})`}}
      >
        <Nav />
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-10 col-lg-8 col-xl-7">
            <div className="site-heading">
          <span className="subheading">Ooops!</span>
          <h1>404</h1>
          <span className="subheading">Page not found.</span>
        </div>
            </div>
          </div>
        </div>
      </header>
    
      <Footer />

      {/* <!-- Bootstrap core JS--> */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
      {/* <!-- Core theme JS--> */}
      <script src="js/scripts.js"></script>
    </div>
  );
};

export default Home;
