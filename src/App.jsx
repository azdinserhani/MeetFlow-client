import Header from "./component/LandingPage/Header";
import "./index.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <div className="px-4 lg:mx-auto lg:max-w-7xl">
      <Header />
      <LandingPage />
    </div>
  );
}

export default App;
