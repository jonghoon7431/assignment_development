import React from "react";
import { Section } from "../../pages/Home";

const SignUp = ({ setSignUpRender }) => {
  return (
    <Section className="w-[35vw]">
      <h1 className="flex justify-center h-24">회원가입</h1>
      <form className="flex flex-col">
        <label>아이디</label>
        <input className="mb-6 border-b-2" type="text" />
        <label>비밀번호</label>
        <input className="mb-6 border-b-2" type="text" />
        <label>비밀번호 확인</label>
        <input className="mb-6 border-b-2" type="text" />
        <label>닉네임</label>
        <input className="mb-6 border-b-2" type="text" />
        <button className="border-2 p-2">회원가입</button>
        <div className="flex flex-row">
          <p>가입된 아이디가 있나요? </p>{" "}
          <p onClick={() => setSignUpRender(false)}>로그인하기</p>
        </div>
      </form>
    </Section>
  );
};

export default SignUp;
