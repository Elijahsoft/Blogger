import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import Home from "./pages/Home";
import Create from "./components/blogs/Create";
import View from "./components/blogs/View";
import Edit from "./components/blogs/Edit";
import Index from "./pages/form/signIn";
import reportWebVitals from "./reportWebVitals";
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import Logout from "./pages/form/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
   
  },
  {
    path: "/blogger/",
    element: <Home />,
  },
  {
    path: "/blogger/create",
    element: <Create />,
  },
  {
    path: "/blogger/about",
    element: <About />,
  },
  {
    path: "/blogger/view/:id/:articleTitle/:articleSubtitle/:articleBody",
    element: <View />,
  },
  {
    path: "/blogger/view/edit/:id/:articleTitle/:articleSubtitle/:articleBody ",
    element: <Edit />,
  },
  {
    path: "/blogger/contact",
    element: <Contact />,
  },
  {
    path: "/blogger/sample-post",
    element: <Post />,
  },
  {
    path: "/blogger/logout",
    element: <Logout />,
  },
  {
    path: "/blogger/signin",
    element: <Index />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
