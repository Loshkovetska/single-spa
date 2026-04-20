import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";

export const Layout = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="w-screen min-h-screen p-10 flex justify-center items-center">
        <div className="p-4 border border-gray-modern-200 rounded-2xl w-full max-w-[600px]">
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
};
