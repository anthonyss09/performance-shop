import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import CartPage from "../src/app/cart/page";

test("CartPage", () => {
  render(
    <StoreProvider>
      <CartPage />
    </StoreProvider>
  );
});
