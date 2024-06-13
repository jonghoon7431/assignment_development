import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { getExpenses } from "../../api/expense";
import { Section } from "../../pages/Home";

const MonthSpending = () => {
  const activeMonth = useSelector((state) => state.activeMonth);

  const { data: expenses = [] } = useQuery({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });

  //월 총액 계산
  const month = expenses.filter((data) =>
    data.date.split("-")[1].includes(activeMonth)
  );

  let totalAmount = 0;
  month.forEach((e) => (totalAmount += Number(e.amount)));

  return (
    <Section>
      <SubTitle>
        {activeMonth}월 총 지출 : {totalAmount.toLocaleString()}원
      </SubTitle>
    </Section>
  );
};

const SubTitle = styled.h3`
  padding: 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`;
export default MonthSpending;
