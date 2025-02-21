
import LoginForm from "../component/LoginPage/LoginForm";
import RightSideInfo from "../component/LoginPage/RightSideInfo";

const LoginPage = () => {
  return (
    <div className="flex h-screen">
      <LoginForm />
      <RightSideInfo />
    </div>
  );
};

export default LoginPage;
