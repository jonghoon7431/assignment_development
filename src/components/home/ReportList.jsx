import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getExpenses } from "../../api/expense";
import { Section } from "../../pages/Home";

const ReportList = () => {
  const {
    data: expenses = [],
    isLoading,
    error,
  } = useQuery({ queryKey: ["expenses"], queryFn: getExpenses });

  const activeMonth = useSelector((state) => state.activeMonth);

  if (isLoading) {
    return <div>로딩중 ...</div>;
  }

  return (
    <Section>
      <H2
        style={{
          paddingTop: "1.5rem",
          paddingLeft: "2rem",
        }}
      >
        내역
      </H2>
      <ReportListUl>
        {expenses
          .filter(
            (prevData) => Number(prevData.date.split("-")[1]) === activeMonth
          )
          .map((data) => (
            <Link
              to={`/details/${data.id}`}
              key={data.id}
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <List>
                <H2 style={{ marginBottom: "1rem" }}>{data.date}</H2>
                <StP>
                  {data.item}-{data.description}
                </StP>
                <AmountWrap>
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {data.amount}원
                  </p>
                </AmountWrap>
              </List>
            </Link>
          ))}
      </ReportListUl>
    </Section>
  );
};

const H2 = styled.h2`
  font-weight: bold;
  font-size: 1.2rem;
`;
const ReportListUl = styled.ul`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const List = styled.li`
  height: 6vh;
  border: 1px solid var(--light-blue);
  border-radius: 10px;
  margin: 10px;
  padding: 1rem;
  box-shadow: 1px 1px 1px 2px var(--blue);
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.5s all;
  }
`;
const StP = styled.p`
  position: absolute;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
  width: 30%;
`;

const AmountWrap = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  @media all and (max-width: 479px) {
    display: none;
  }
`;

export default ReportList;
