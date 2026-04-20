import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="w-screen min-h-screen p-10 flex justify-center items-center">
      <div className="p-4 border border-gray-modern-200 rounded-2xl w-full max-w-[600px]">
        <Outlet />
      </div>
    </div>
  );
};
