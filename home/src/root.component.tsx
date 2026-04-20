import "@e-commerce/ui-utils";
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./features/layout";
import { authProxy } from "./proxies/auth-proxy";
import { analyticRoute, dashboardRoute } from "./screens";

const router = createBrowserRouter(
  [
    {
      middleware: [authProxy],
      Component: Layout,
      children: [dashboardRoute, analyticRoute],
    },
  ],
  {},
);

export default function Root() {
  return <RouterProvider router={router} />;
}
