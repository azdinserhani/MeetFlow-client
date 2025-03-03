import { Outlet } from "react-router-dom";
import SideBar from "../component/Dashboard/SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <main className="flex-1  bg-gray-50">
        <Outlet /> {/* Render nested routes here */}
      </main>
    </div>
  );
};

export default DashboardLayout;
