import React from "react";
import { createBrowserRouter } from "react-router-dom";

const Navbar      = React.lazy(() => import("../components/Navbar/Navbar"));
const Logins      = React.lazy(() => import("../pages/Login/LoginSection.jsx"));
const IndexRoot   = React.lazy(() => import("../pages/HomePage"));
const NotFound    = React.lazy(() => import("../components/NotFound/NotFound"));
const UserLogin   = React.lazy(() => import("../components/ValidaUserLogin/NavbarUser/NavbarUser"));
const Register    = React.lazy(() => import("../pages/Register/Register.jsx"))

const router = createBrowserRouter([
   {
      path: "/",
      element: <Navbar />,
   },
   {
      path: "/login",
      element: <Logins />,
   },
   {
      path: "/MyShopUi",
      element: <IndexRoot />,
   },
   {
      path: "/userLogin",
      element: <UserLogin />,
   },
   {
      path: "/Register",
      element: <Register />,
   },
   {
      path: "*",
      element: <NotFound />,
   },
]);

export default router;
