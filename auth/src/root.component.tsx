import "@e-commerce/ui-utils";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./features";
import "./global.css";
import { SignIn, SignUp } from "./screens";

const router = createBrowserRouter(
  [
    {
      Component: Layout,
      children: [
        {
          path: "sign-in",
          Component: SignIn,
        },
        {
          path: "sign-up",
          Component: SignUp,
        },
      ],
    },
  ],
  {},
);

export default function Root() {
  return <RouterProvider router={router} />;
}
