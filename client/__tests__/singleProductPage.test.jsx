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
});
