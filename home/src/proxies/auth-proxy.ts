import { createContext, redirect } from "react-router";

const userContext = createContext<{ email: string; password: string }>();

export function authProxy({ context }) {
  const user = localStorage.getItem("user");
  if (!user) {
    throw redirect("/sign-in");
  }
  context.set(userContext, JSON.parse(user));
}
