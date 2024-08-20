import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/app/page.jsx";
import StoreProvider from "../src/app/StoreProvider";

test("HomePage", () => {
  render(
    <StoreProvider>
      <HomePage />
    </StoreProvider>
  );
});
