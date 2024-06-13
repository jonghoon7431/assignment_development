import React from "react";
import { useSelector } from "react-redux";
import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Details from "../pages/Details";
import Home from "../pages/Home";
import MemberAuth from "../pages/MemberAuth";
import MyPage from "../pages/MyPage";

const PrivateRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.user.success);
  return isLogin ? element : <Navigate to="/sign_in" />;
};
const PublicRoute = ({ element }) => {
  const isLogin = useSelector((state) => state.user.success);
  return isLogin ? <Navigate to="/" /> : element;
};

const router = createBrowserRouter(
  [
    {
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <PrivateRoute element={<Home />} />,
        },
        {
          path: "/details/:id",
          element: <PrivateRoute element={<Details />} />,
        },
        {
          path: "/my_page",
          element: <PrivateRoute element={<MyPage />} />,
        },
      ],
    },
    {
      path: "/sign_in",
      element: <PublicRoute element={<MemberAuth />} />,
    },
  ],
  {
    basename: "/assignment_expense_report/",
  }
);

export default router;
