import React, { useState } from "react";
import Login from "../components/memberAuth/Login";
import SignUp from "../components/memberAuth/SignUp";

const MemberAuth = () => {
  const [signUpRender, setSignUpRender] = useState(false);
  console.log(signUpRender);
  return (
    <div>
      TODO 유효성 검사 필요
      {signUpRender ? (
        <SignUp setSignUpRender={setSignUpRender} />
      ) : (
        <Login setSignUpRender={setSignUpRender} />
      )}
    </div>
  );
};

export default MemberAuth;
