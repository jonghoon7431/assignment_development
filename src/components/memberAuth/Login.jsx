import React from "react";
import { Section } from "../../pages/Home";

const Login = ({ setSignUpRender }) => {
  return (
    <Section className="w-[35vw]">
      <h1 className="flex justify-center h-24">로그인</h1>
      <form className="flex flex-col">
        <label>아이디</label>
        <input className="mb-6 border-b-2" type="text" />
        <label>비밀번호</label>

        <input className="mb-6 border-b-2" type="text" />
        <button className="border-2 p-2">로그인</button>
        <button className="border-2 p-2" onClick={() => setSignUpRender(true)}>
          회원가입
        </button>
      </form>
    </Section>
  );
};

export default Login;
