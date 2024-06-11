import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

function Layout() {
  return (
    <StBackground>
      <Header />
      <StMain>
        <Outlet />
      </StMain>
    </StBackground>
  );
}

export default Layout;

const StBackground = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: auto;
`;
const StMain = styled.main`
  display: flex;
  justify-content: center;

  /* 모바일 가로, 테블릿 세로 (해상도 ~ 479px)*/
  @media all and (max-width: 479px) {
    margin: 1rem 2rem;
  }
`;
