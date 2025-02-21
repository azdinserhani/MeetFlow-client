import Header from "./component/LandingPage/Header";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div className="px-4 lg:mx-auto lg:max-w-7xl">
      <LoginPage />
    </div>
  );
}

export default App;
