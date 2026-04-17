import "@e-commerce/ui-utils";
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./features/layout";
import { analyticRoute, dashboardRoute } from "./screens";

const router = createBrowserRouter(
  [
    {
      Component: Layout,
      children: [
        {
          index: true,
          errorElement: <div>Failed To Load</div>,
          ...dashboardRoute,
        },
        {
          path: "/analytics",
          errorElement: <div>Failed To Load</div>,
          ...analyticRoute,
        },
      ],
    },
  ],
  {},
);

export default function Root() {
  return <RouterProvider router={router} />;
}
