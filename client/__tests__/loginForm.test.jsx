import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import LoginForm from "../src/app/components/LoginForm";

test("LoginForm", () => {
  render(
    <StoreProvider>
      <LoginForm />
    </StoreProvider>
  );

  const loginFormMain = screen.getByRole("login-form-main");
  const loginFormChevron = screen.getByRole("login-form-chevron");
  const loginFormBtnLogin = screen.getByRole("login-form-btn-login");
  const loginFormBtnJoin = screen.getByRole("login-form-btn-join");
  const loginFormBtnSubmit = screen.getByRole("login-form-btn-submit");

  expect(loginFormMain).toBeDefined();
  expect(loginFormChevron).toBeDefined();
  expect(loginFormBtnLogin).toBeDefined();
  expect(loginFormBtnJoin).toBeDefined();
  expect(loginFormBtnSubmit).toBeDefined();
});
