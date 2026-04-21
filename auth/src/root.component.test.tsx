import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createRoutesStub } from "react-router";
import { Layout } from "./features";
import { SignIn } from "./screens";

describe("Sign In Page", () => {
  beforeEach(() => {
    const Stub = createRoutesStub([
      {
        Component: Layout,
        children: [{ path: "/sign-in", Component: SignIn }],
      },
      {
        path: "/",
        Component: () => <div>Welcome to Dashboard</div>, // Mocked target page
      },
    ]);

    render(<Stub initialEntries={["/sign-in"]} />);
  });
  test("SignIn Email Validation", async () => {
    const USER_EMAIL = "loshkgm.com";
    const event = userEvent.setup();

    await event.type(screen.getByTestId("email"), USER_EMAIL);

    const errorMessage = await screen.findByText("Invalid email address");
    expect(errorMessage).toBeInTheDocument();
  });
  test("SignIn Error Result", async () => {
    const USER_EMAIL = "loshk@gm.com";
    const USER_PASSWORD = "pas10000090ffdd";
    const event = userEvent.setup();

    await event.type(screen.getByTestId("email"), USER_EMAIL);
    await event.type(screen.getByTestId("password"), USER_PASSWORD);
    // simulate interactions
    await event.click(screen.getByRole("sign-in-submit"));
    const error = await screen.findByText("User doesn't exist");
    expect(error).toBeInTheDocument();
  });

  test("SignIn Success Result", async () => {
    const USER_EMAIL = "abbra@gmail.com";
    const USER_PASSWORD = "abbra2026";
    const event = userEvent.setup();

    await event.type(screen.getByTestId("email"), USER_EMAIL);
    await event.type(screen.getByTestId("password"), USER_PASSWORD);
    // simulate interactions
    await event.click(screen.getByRole("sign-in-submit"));

    const dashboardText = await screen.findByText("Welcome to Dashboard");
    expect(dashboardText).toBeInTheDocument();
  });
});
