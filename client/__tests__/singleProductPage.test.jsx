import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import SingleProductPage from "../src/app/products/single-product/page";

test("Home", () => {
  render(
    <StoreProvider>
      <SingleProductPage />
    </StoreProvider>
  );

  const singleProductMain = screen.getByRole("single-product-main");
  const singleProductH1 = screen.getByRole("single-product-h1");
  const singleProductHeaderP = screen.getByRole("single-product-header-p");

  expect(singleProductMain).toBeDefined();
  expect(singleProductH1).toBeDefined();
  expect(singleProductHeaderP).toBeDefined();
});
