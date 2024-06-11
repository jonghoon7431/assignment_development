import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Details from "../pages/Details";
import Home from "../pages/Home";
import MemberAuth from "../pages/MemberAuth";

const router = createBrowserRouter(
  [
    {
      element: <Layout />,

      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/details/:id",
          element: <Details />,
        },
      ],
    },
    {
      path: "/",
      element: <MemberAuth />,
    },
  ],
  {
    basename: "/assignment_expense_report",
  }
);

export default router;
