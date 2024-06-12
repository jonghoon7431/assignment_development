import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import useInput from "../../hooks/useInput";
import { Section } from "../../pages/Home";

const Login = ({ setSignUpRender }) => {
  const [id, onChangeIdHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ id, password });

    alert("로그인 완료");
    navigate("/");
  };

  return (
    <Section className="w-[35vw]">
      <h1 className="flex justify-center h-24">로그인</h1>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>아이디</label>
        <input
          className="mb-6 border-b-2"
          type="text"
          value={id}
          onChange={onChangeIdHandler}
          minLength="4"
          maxLength="10"
        />
        <label>비밀번호</label>
        <input
          className="mb-6 border-b-2"
          type="password"
          value={password}
          onChange={onChangePasswordHandler}
          minLength="4"
          maxLength="15"
        />
        <button className="border-2 p-2">로그인</button>
        {/* TODO p-호버효과, 커서 포인터 */}
        <p onClick={() => setSignUpRender(true)}>회원가입하기</p>
      </form>
    </Section>
  );
};

export default Login;
