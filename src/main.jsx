import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Home from "./pages/main/Home";
import Blogs from "./pages/main/Blogs";
import About from "./pages/main/About";
import Contact from "./pages/main/Contact.jsx";
import Services from "./pages/main/Services.jsx";
import MobileLanding from"./pages/mobileLp/MobileLanding.jsx";
import AdminPanel from "./pages/admin/AdminPanel.jsx";
import AddPost from "./components/admin/AddPost.jsx";
import PostList from "./components/admin/PostList.jsx";
/* import  AuthProvider  from "./services/context/AuthProvider.jsx"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
  },
  {

    path: "/mobile",


    element: <MobileLanding />,
  },
  {

    path: "/admin",


    element: <AdminPanel />,
    children:[
      {
        path: "addpost",
        element: <AddPost />,
      },
      {
        path: "postlist",
        element: <PostList />,
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
{/*     <AuthProvider> */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
   {/*  </AuthProvider> */}
  </React.StrictMode>,
);
