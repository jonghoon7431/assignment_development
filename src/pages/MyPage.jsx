import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "../api/auth";
import useInput from "../hooks/useInput";
import { Section } from "./Home";

const MyPage = () => {
  const navigate = useNavigate();

  const [nickname, onChangeNicknameHandler] = useInput("");
  const [avatar, setAvatar] = useState(null);

  const handleProfileUpload = async () => {
    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);

    await updateProfile(formData);
    window.location.replace("/");
  };
  return (
    <Section className="flex flex-col items-center">
      <h1 className="my-10 text-2xl	">프로필 수정</h1>
      <div className="my-4">
        <label>닉네임</label>
        <input
          className="border-black border-2"
          type="text"
          minLength={1}
          maxLength={10}
          onChange={onChangeNicknameHandler}
        />
      </div>
      <div className="my-4">
        <label>이미지</label>
        <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
      </div>
      <button className="border-2 p-4" onClick={handleProfileUpload}>
        프로필 업데이트
      </button>
    </Section>
  );
};

export default MyPage;
