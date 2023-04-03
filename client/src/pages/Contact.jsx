import React, { useCallback, useEffect, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import img from "../assets/img/contact-bg.jpg";
import { Link } from "react-router-dom";
const Contact = () => {
  if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
    window.location.replace("/blogger/signin");
  }
  useEffect(() => {
    document.title = "LBlog |  Contact ";
  });

  const [inputValue, setInputValue] = useState({});
  const handleChange = useCallback(
    (e) => {
      setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    },
    [inputValue]
  );
  const { name, subject, message } = inputValue;
  return (
    <>
      <Nav />
      <header class="masthead" style={{ backgroundImage: `url(${img})` }}>
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="page-heading">
                <h1>Contact Me</h1>
                <span class="subheading">Have questions? I have answers.</span>
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
                Want to get in touch? Fill out the form below to send me a
                message and I will get back to you as soon as possible!
              </p>
              <div class="my-5">
                <div class="form-floating">
                  <input
                    class="form-control"
                    name="name"
                    type="text"
                    defaultValue={null}
                    onChange={handleChange}
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  name="subject"
                  defaultValue={null}
                  onChange={handleChange}
                  type="subject"
                  placeholder="Enter your subject..."
                  data-sb-validations="required,subject"
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div class="form-floating">
                <textarea
                  class="form-control"
                  name="message"
                  defaultValue={null}
                  onChange={handleChange}
                  placeholder="Enter your message here..."
                  style={{ height: " 12rem" }}
                  data-sb-validations="required"
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>
              <br />

              <Link
                className="btn btn-primary text-uppercase"
                to={`mailto:elijahsoft@gmail.com?subject=${subject}&body=I'm, ${name} I'sent-{${message}} to you`}
              >
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
