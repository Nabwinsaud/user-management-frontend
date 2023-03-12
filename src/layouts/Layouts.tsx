import { Outlet } from "react-router-dom";
import DataGridTable from "../admin/Table";
import Sidebar from "@components/Sidebar";
import Dashboard from "@admin/Dashboard";
export default function Layout() {
  return (
    <div className="flex flex-col w-full h-screen">
      <main className="flex w-full">
        <Sidebar />
        <Dashboard />
      </main>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
