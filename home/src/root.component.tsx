import "@e-commerce/ui-utils";
import "./global.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./features/layout";
import { authProxy, userContext } from "./proxies/auth-proxy";
import { analyticRoute, dashboardRoute } from "./screens";

const router = createBrowserRouter(
  [
    {
      middleware: [authProxy],
      loader: ({ context }) => {
        const user = context.get(userContext);
        if (!user) {
          throw new Response("Unauthorized", { status: 401 });
        }
        return { user };
      },
      Component: Layout,
      children: [dashboardRoute, analyticRoute],
    },
  ],
  {},
);

export default function Root() {
  return <RouterProvider router={router} />;
}
