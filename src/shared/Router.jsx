import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Details from "../pages/Details";
import Home from "../pages/Home";
import MemberAuth from "../pages/MemberAuth";

const PrivateRoute = ({ element: Element, ...rest }) => {
  //TODO 로그인 정보를 받아서, 로그인 되어있지 않으면 로그인으로 리다이렉트
};
const PublicRoute = ({ element: Element, ...rest }) => {
  //TODO 로그인 정보 가져와서 , 로그인 된 사용자는 마이페이지로 리다이렉트
};

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
