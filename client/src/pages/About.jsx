import React, { useEffect }  from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import img from "../assets/img/about-bg.jpg";

const About = () => {
  
if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
  window.location.replace("/blogger/signin")
}
useEffect(() => {
  document.title = "LBlog |  About ";
});
  return (
    <>
      <Nav />

      <div>
        <header class="masthead" style={{ backgroundImage: `url(${img})` }}>
          <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                <div class="page-heading">
                  <h1>About Me</h1>
                  <span class="subheading">This is what I do.</span>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main class="mb-4">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                <p>
                  {" "}
                  Hi, I’m Laddie! with in-depth experience in UI/UX design. In a
                  nutshell, I create websites that help organizations address
                  business challenges and meet their needs.
                </p>
                <p>
                  {" "}
                  I manage everything from website navigation and layout to a
                  company’s web hosting and security architecture. My expertise
                  lies within front-end web apps, and the main languages in my
                  tech stack are JavaScript, React, and of course HTML/CSS.{" "}
                </p>
                <p>
                  I’m a lifelong learner (currently taking a course on building
                  AI c hatbots with Python!) and love to read, run, and find new
                  bubble tea shops in Kigali.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />

       
      </div>
    </>
  );
};

export default About;
