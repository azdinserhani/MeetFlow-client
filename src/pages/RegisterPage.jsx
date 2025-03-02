import React from "react";

import RightSideInfo from "../component/AuthPage/RightSideInfo";
import RegisterForm from "../component/AuthPage/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <RegisterForm />
      <RightSideInfo />
    </div>
  );
};

export default RegisterPage;
