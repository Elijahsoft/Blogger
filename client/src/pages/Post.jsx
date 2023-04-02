import React, { useEffect }  from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import img from ".././assets/img/post-bg.jpg"
import '../assets/style.css';


const Post = () => {
    if (!localStorage.getItem("user") && !localStorage.getItem("userToken")) {
        window.location.replace("/blogger/signin")
      }
      useEffect(() => {
        document.title = "LBlog |  Sample blog ";
      });
  return(
    <>
     <Nav />
            <header class="masthead" style={{backgroundImage:`url(${img})`}}>
                <div class="container position-relative px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <div class="post-heading">
                                <h1>Man must explore, and this is exploration at its greatest</h1>
                                <h2 class="subheading">Problems look mighty small from 150 miles up</h2>
                                <span class="meta">
                                    Posted by
                                    <a href="#!"> LBlog </a>
                                    on August 24, 2023
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- Post Content--> */}
            <article class="mb-4">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-md-10 col-lg-8 col-xl-7">
                            <h2 class="section-heading">The Final Frontier</h2>
                            <p>“Any fool can write code that a computer can understand. Good programmers write code that
                                humans can understand.” – Martin Fowler
                                “First, solve the problem. Then, write the code.” – John Johnson
                                “Experience is the name everyone gives to their mistakes.” – Oscar Wilde
                                “ In order to be irreplaceable, one must always be different” – Coco Chanel
                                “Java is to JavaScript what car is to Carpet.” – Chris Heilmann
                                “Knowledge is power.” – Francis Bacon</p>

                            <blockquote class="blockquote">“Sometimes it pays to stay in bed on Monday, rather than
                                spending the rest of the week debugging Monday’s code.” – Dan Salomon
                                “Fix the cause, not the symptom.” – Steve Maguire</blockquote>
                            <p>Spaceflights cannot be stopped. This is not the work of any one man or even a group of
                                men. It is a historical process which mankind is carrying out in accordance with the
                                natural laws of human development.</p>
                            <h2 class="section-heading">Reaching for the Stars</h2>
                            <p>“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck
                                “When to use iterative development? You should use iterative development only on
                                projects that you want to succeed.” – Martin Fowler
                                “Simplicity is the soul of efficiency.” – Austin Freeman
                                “Before software can be reusable it first has to be usable.” – Ralph Johnson
                                “Make it work, make it right, make it fast.” – Kent Beck</p>

                        </div>
                    </div>
                </div>
            </article>
            {/* <!-- Footer--> */}
            <Footer/>
                {/* <!-- Bootstrap core JS--> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                {/* <!-- Core theme JS--> */}
                <script src="js/scripts.js"></script>
    
    </>
  )
}

export default Post

       
