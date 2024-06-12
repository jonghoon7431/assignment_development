import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import { Section } from "../../pages/Home";
import useBearsStore from "../../zustand/bearsStore";

const Login = ({ setSignUpRender }) => {
  const [id, onChangeIdHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");
  const login = useBearsStore((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(id);
    const response = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/login",
      {
        id,
        password,
      }
    );
    const data = response.data;
    if (data.success) {
      // TODO fix- 로그아웃 후, 다시 시도할 때 login is not a function error
      login(data.accessToken);
      navigate("/home");
    } else {
      // TODO 로그인 실패 원인에 따른 alert 띄우기
      alert("로그인 실패");
    }
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
        />
        <label>비밀번호</label>
        <input
          className="mb-6 border-b-2"
          type="text"
          value={password}
          onChange={onChangePasswordHandler}
        />
        <button className="border-2 p-2">로그인</button>
        {/* TODO p-호버효과, 커서 포인터 */}
        <p onClick={() => setSignUpRender(true)}>회원가입하기</p>
      </form>
    </Section>
  );
};

export default Login;
