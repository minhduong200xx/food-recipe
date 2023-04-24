import { MemoryRouter } from "react-router-dom";
import Auth from "./Auth";
import { render, screen } from "@testing-library/react";

test("input fields", () => {
  render(
    <MemoryRouter>
      <Auth />
    </MemoryRouter>
  );
  const inputUsername = screen.getByPlaceholderText("Email");
  const inputPass = screen.getByPlaceholderText("Mật khẩu");
  const button = screen.getByRole("button");
  expect(inputUsername).toBeInTheDocument();
  expect(inputPass).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
