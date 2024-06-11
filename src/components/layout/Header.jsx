import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="bg-sky-900 h-[7vh] flex justify-between text-white mb-4">
      <div className="flex gap-4 ml-6">
        <button onClick={() => navigate("/home")}>HOME</button>
        <button>내 프로필</button>
      </div>
      <div className="flex gap-4 items-center mr-6">
        {/* TODO: 프로밀 이미지 들어갈 부분 */}
        <p>닉네임</p>
        <button onClick={() => navigate("/")}>로그아웃</button>
      </div>
    </header>
  );
};

export default Header;
