import React from "react";
import styled from "styled-components";
import ChoiceMonth from "../components/home/ChoiceMonth";
import Container from "../components/home/Container";
import Form from "../components/home/Form";
import MonthSpending from "../components/home/MonthSpending";
import ReportList from "../components/home/ReportList";

export default function () {
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
