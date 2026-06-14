import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";
import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main-container">
        <Topbar />
        <main className="dashboard-page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;