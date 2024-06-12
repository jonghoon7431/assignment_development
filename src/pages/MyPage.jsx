import React from "react";
import { Section } from "./Home";

const MyPage = () => {
  return (
    <Section className="flex flex-col items-center">
      <h1 className="my-10 text-2xl	">프로필 수정</h1>
      <div className="my-4">
        <label>닉네임</label>
        <input className="border-black border-2" type="text" />
      </div>
      <div className="my-4">
        <label>이미지</label>
        <input type="file" />
      </div>
      <button className="border-2 p-4">프로필 업데이트</button>
    </Section>
  );
};

export default MyPage;
