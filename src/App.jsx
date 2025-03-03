import Header from "./component/LandingPage/Header";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import ForgetPassword from "./pages/ForgetPassword";
import DashboardLayout from "./layouts/DashboardLayout";
import Home from "./pages/Dashboard/Home";
import Projects from "./pages/Dashboard/Projects";
function App() {
  return (
    <div className="px-4">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route path="home" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="settings" element={<p>settings</p>} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
