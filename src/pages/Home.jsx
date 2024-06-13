import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ChoiceMonth from "../components/home/ChoiceMonth";
import Container from "../components/home/Container";
import Form from "../components/home/Form";
import MonthSpending from "../components/home/MonthSpending";
import ReportList from "../components/home/ReportList";

export default function () {
  //TODO 캐싱 해야될듯 콘솔 6번씩뜸
  const isLogin = useSelector((state) => state.user.success);
  useEffect(() => {
    if (!isLogin) {
      navigate("/sign_in");
    }
  }, [isLogin]);

  return (
    <Container>
      <Form />
      <ChoiceMonth />
      <MonthSpending />
      <ReportList />
    </Container>
  );
}

export const Section = styled.section`
  background-color: white;
  border-radius: 10px;
  margin: 20px 0;
  padding: 0.5rem 1rem;
`;
