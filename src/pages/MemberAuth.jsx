import React, { useState } from "react";
import Login from "../components/memberAuth/Login";
import SignUp from "../components/memberAuth/SignUp";

const MemberAuth = () => {
  const [signUpRender, setSignUpRender] = useState(false);
  console.log(signUpRender);
  return (
    <section className="flex flex-col items-center">
      {signUpRender ? (
        <SignUp setSignUpRender={setSignUpRender} />
      ) : (
        <Login setSignUpRender={setSignUpRender} />
      )}
    </section>
  );
};

export default MemberAuth;
