import LoginForm from "../component/AuthPage/LoginForm";
import RightSideInfo from "../component/AuthPage/RightSideInfo";

const LoginPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <LoginForm />
      <RightSideInfo />
    </div>
  );  
};

export default LoginPage;
