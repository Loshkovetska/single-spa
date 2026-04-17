import { Outlet } from "react-router";
import Navbar from "./navbar";

export default function Layout() {
  return (
    <div className="grid grid-cols-[400px_1fr] min-h-screen">
      <Navbar />
      <div className="w-full p-10">
        <Outlet />
      </div>
    </div>
  );
}
