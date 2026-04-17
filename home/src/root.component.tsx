import "@e-commerce/ui-utils";

import { createBrowserRouter, RouterProvider } from "react-router";
import { DashboardScreen } from "./screens/dashboard";

const router = createBrowserRouter([
  {
    Component: DashboardScreen,
    loader: () => {
      return [];
    },
  },
]);

export default function Root() {
  return <RouterProvider router={router} />;
}
