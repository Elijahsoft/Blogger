import React from "react";


const Logout = () => {

  if (localStorage.getItem("userToken")) {
    localStorage.clear();
    localStorage.getItem("userToken");
 window.location.replace('/blogger/signin')
  } else {
    window.location.replace('/blogger/signin')
  }
  return (<div></div>);
};

export default Logout;
