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
});
