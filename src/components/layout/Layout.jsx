import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { getUser } from "../../api/auth";
import { getUserInfo } from "../../redux/slices/userSlice";
import Header from "./Header";

function Layout() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  console.log(user);

  //로그인 된 정보 redux로 보내기
  useEffect(() => {
    const fetchUserInfo = async () => {
      const data = await getUser();
      dispatch(getUserInfo(data));
    };
    fetchUserInfo();
  }, []);

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
