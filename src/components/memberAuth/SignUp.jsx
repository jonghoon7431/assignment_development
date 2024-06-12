import axios from "axios";
import React from "react";
import useInput from "../../hooks/useInput";
import { Section } from "../../pages/Home";

const SignUp = ({ setSignUpRender }) => {
  const [id, onChangeIdHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");
  const [checkPassword, onChangeCheckPasswordHandler] = useInput("");
  const [nickname, onChangeNicknameHandler] = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO 비밀번호, 비밀번호 확인 일치하지 않으면 return alert

    const response = await axios.post(
      "https://moneyfulpublicpolicy.co.kr/register",
      { id, password, nickname }
    );
    const data = response.data;
    if (data.success) {
      setSignUpRender(false);
    } else {
      // TODO어떤 오류때문인지 파악 후 alert으로 알려주는 법 찾기
      // TODO try...catch 구문의 이점, 효과적으로 사용할 방법 찾아보기
      alert("회원가입 실패");
    }
  };
  return (
    <Section className="w-[35vw]">
      <h1 className="flex justify-center h-24">회원가입</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
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
          type="password"
          value={password}
          onChange={onChangePasswordHandler}
        />
        <label>비밀번호 확인</label>
        <input
          className="mb-6 border-b-2"
          type="password"
          value={checkPassword}
          onChange={onChangeCheckPasswordHandler}
        />
        <label>닉네임</label>
        <input
          className="mb-6 border-b-2"
          type="text"
          value={nickname}
          onChange={onChangeNicknameHandler}
        />
        <button className="border-2 p-2">회원가입</button>
        <div className="flex flex-row">
          <p>가입된 아이디가 있나요? </p>
          {/* TODO 호버효과, 커서 포인터 */}
          <p onClick={() => setSignUpRender(false)}>로그인하기</p>
        </div>
      </form>
    </Section>
  );
};

export default SignUp;
