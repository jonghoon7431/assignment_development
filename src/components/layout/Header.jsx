import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../../redux/slices/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { nickname, avatar } = user;

  const handleLogout = () => {
    localStorage.clear();
    dispatch(removeUserInfo());
    navigate("/sign_in");
  };
  return (
    <header className="bg-sky-900 h-[7vh] flex justify-between text-white mb-4">
      <div className="flex gap-4 ml-6">
        <button onClick={() => navigate("/")}>HOME</button>
        <button onClick={() => navigate("/my_page")}>마이페이지</button>
      </div>
      <div className="flex gap-4 items-center mr-6">
        <img
          className="w-10 h-10 rounded-full"
          src={avatar}
          alt="user profile"
        />
        <p>{nickname}</p>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </header>
  );
};

export default Header;
