import React from "react";
import "react-toastify/dist/ReactToastify.css";
import bootstrap from 'bootstrap'
const Nav = () => {
   window.addEventListener("DOMContentLoaded", () => {
    let scrollPos = 0;
    const mainNav = document.getElementById("mainNav");
    const headerHeight = mainNav.clientHeight;
    window.addEventListener("scroll", function () {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      if (currentTop < scrollPos) {
        // Scrolling Up
        if (currentTop > 0 && mainNav.classList.contains("is-fixed")) {
          mainNav.classList.add("is-visible");
        } else {
          console.log(123);
          mainNav.classList.remove("is-visible", "is-fixed");
        }
      } else {
        // Scrolling Down
        mainNav.classList.remove(["is-visible"]);
        if (
          currentTop > headerHeight &&
          !mainNav.classList.contains("is-fixed")
        ) {
          mainNav.classList.add("is-fixed");
        }
      }
      scrollPos = currentTop;
    });
  });

  return (
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="/">
          {" "}
          LBlog
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="/blogger/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="/blogger/Create">
                Create
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="/blogger/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link px-lg-3 py-3 py-lg-4"
                href="/blogger/sample-post"
              >
                Sample Post
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="/blogger/contact">
                Contact
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link px-lg-3 py-3 py-lg-4" href="/blogger/logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
