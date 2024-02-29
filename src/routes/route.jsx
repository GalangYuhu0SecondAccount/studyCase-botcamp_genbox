import React from "react";
import {createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Logins from "../pages/Login/LoginSection";
import IndexRoot from "../pages/HomePage";
import NotFound from "../components/NotFound/NotFound";


const router = createBrowserRouter(
    [
        {
            path : '/',
            element: <Navbar />,
        },
        {
            path : '/login',
            element: <Logins />,
        },
        {
            path : '/MyShopUi',
            element: <IndexRoot />,
        },
        {
            path : '*',
            element: <NotFound />,
        },
    ]
)


export default router