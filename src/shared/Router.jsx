import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Details from "../pages/Details";
import Home from "../pages/Home";
import MemberAuth from "../pages/MemberAuth";

const Router = () => {
  return (
    <BrowserRouter basename="/assignment_expense_report/">
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/" element={<MemberAuth />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
