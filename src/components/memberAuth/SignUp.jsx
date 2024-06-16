import React from "react";
import { register } from "../../api/auth";
import useInput from "../../hooks/useInput";
import { Section } from "../../pages/Home";

const SignUp = ({ setSignUpRender }) => {
  const [id, onChangeIdHandler] = useInput("");
  const [password, onChangePasswordHandler] = useInput("");
  const [checkPassword, onChangeCheckPasswordHandler] = useInput("");
  const [nickname, onChangeNicknameHandler] = useInput("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== checkPassword)
      return alert(
        "비밀번호와 비밀번호 확인이 일치하지 않습니다. 다시 입력해주세요"
      );

    const data = await register({ id, password, nickname });
    if (data) {
      alert("회원가입이 완료되었습니다");
      setSignUpRender(false);
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
        <label>비밀번호 확인</label>
        <input
          className="mb-6 border-b-2"
          type="password"
          value={checkPassword}
          onChange={onChangeCheckPasswordHandler}
          minLength="4"
          maxLength="15"
        />
        <label>닉네임</label>
        <input
          className="mb-6 border-b-2"
          type="text"
          value={nickname}
          onChange={onChangeNicknameHandler}
          minLength="1"
          maxLength="10"
        />
        <button className="border-2 p-2" type="submit">
          회원가입
        </button>
        <div className="flex flex-row">
          <p>가입된 아이디가 있나요? </p>
          <p onClick={() => setSignUpRender(false)}>로그인하기</p>
        </div>
      </form>
    </Section>
  );
};

export default SignUp;
