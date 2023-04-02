import { useCallback, useEffect, useState } from "react";
import { SERVER_URL } from "../../util/index.js";
import axios from "axios";
import "../../assets/signIn.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Index = () => {

  useEffect(() => {
    document.title = "LBlog |  Signin ";
  });

  const redirectTo = useNavigate();
  const [signUp, setIsSignUp] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [signUpData, setSignUpData] = useState({});
  const [signInData, setSignInData] = useState({});
  if (localStorage.getItem("user") && localStorage.getItem("userToken")) {
    window.location.replace("/")
  }
  if(localStorage.getItem("new")){
    toast(localStorage.getItem("new"));
    setTimeout(()=>{
      return localStorage.removeItem("new")
    },1000)
  }
  const handleSetSignUpData = useCallback(
    (e) => {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    },
    [signUpData]
  );
  const handleSetSignInData = useCallback(
    (e) => {
      setSignInData({ ...signInData, [e.target.name]: e.target.value });
    },
    [signInData]
  );
  const handleSignIn = async (e) => {
    e.preventDefault();
    if(signInData.email === undefined || signInData.password === undefined){
      signInData.email = null
      signInData.password = null
      
    }

    const { data } = await axios.post(`${SERVER_URL}/signin`, signInData);
    const { user, token } = data;
    if (data.error) {
      toast(data.error);
      console.log(data.error)
    } else {

      localStorage.setItem("userToken", JSON.stringify(token));
      localStorage.setItem("user", JSON.stringify(user));
      redirectTo("/");
    }
  };
  const handleSubmit = async () => {
    const { data } = await axios.post(`${SERVER_URL}/signup `, signUpData);
    
    if (data.error) {
      toast(data.error);
    } else {
      localStorage.setItem("new", "Your account is now ready.");
      handleClick();

    }

  };

  const switchMode = () => {
    setIsSignUp(!signUp);
  };

  const handleClick = () => {
    setIsActive((contain) => !contain);
    switchMode();
   
  };

  return (
    <>

      <div className="inForm">
        <div
          className={` container form   ${
            isActive ? "right-panel-active" : ""
          } `}
        >
          <ToastContainer />
          <div className="form-container sign-in-container">
            <form>
              <h1>Sign In</h1>
              <div className="social-container">
                <a href="" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span> Or use your account</span>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleSetSignInData}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleSetSignInData}
              />
              <a href=""> Forgot Your Password</a>
              <a className="button" onClick={handleSignIn}>
                Sign In
              </a>
            </form>
          </div>

          <div className="form-container sign-up-container">
            <form>
              <h1 className="">Create Account</h1>
              <div className="social-container">
                <a href="" className="social">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="social">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="" className="social">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span> Or use email for registration</span>
              <input
                type="text"
                placeholder="Name"
                name="fullNames"
                onChange={handleSetSignUpData}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleSetSignUpData}
              />
              <input
                type="text"
                placeholder="User Type"
                name="userType"
                onChange={handleSetSignUpData}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleSetSignUpData}
              />
              <a className="button " onClick={handleSubmit}>
                Sign Up
              </a>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <a
                  className="button  ghost "
                  onClick={handleClick}
                  href="#form"
                >
                  Sign In
                </a>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <a
                  className="button  ghost "
                  onClick={handleClick}
                  href="#signup"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
