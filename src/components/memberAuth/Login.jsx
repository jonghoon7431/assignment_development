import React from "react";
import useInput from "../../hooks/useInput";
import { Section } from "../../pages/Home";

const Login = ({ setSignUpRender }) => {
  const [id, onChangeIdHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");

  return (
    <Section className="w-[35vw]">
      <h1 className="flex justify-center h-24">로그인</h1>
      <form className="flex flex-col">
        <label>아이디</label>
        <input className="mb-6 border-b-2" type="text" />
        <label>비밀번호</label>
        <input className="mb-6 border-b-2" type="text" />
        <button className="border-2 p-2">로그인</button>
        {/* TODO p-호버효과, 커서 포인터 */}
        <p onClick={() => setSignUpRender(true)}>회원가입하기</p>
      </form>
    </Section>
  );
};

export default Login;
