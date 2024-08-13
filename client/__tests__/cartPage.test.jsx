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

  //cart-main
  //cart-header
  //cart-h2
  //cart-header-p
  //cart-item-list
  //cart-btn
  //cart-total
  //cart-tax
  //cart-delivery
  //cart-subtotal
  const cartMain = screen.getByRole("cart-main");
  const cartHeader = screen.getByRole("cart-header");
  const cartH2 = screen.getByRole("cart-h2");
  const cartHeaderP = screen.getByRole("cart-header-p");
  const cartItemList = screen.getByRole("cart-item-list");
  const cartBtn = screen.getByRole("cart-btn");
  const cartTax = screen.getByRole("cart-tax");
  const cartDelivery = screen.getByRole("cart-delivery");
  const cartSubTotal = screen.getByRole("cart-subtotal");
  const cartTotal = screen.getByRole("cart-total");

  expect(cartMain).toBeDefined();
  expect(cartHeader).toBeDefined();
  expect(cartH2).toBeDefined();
  expect(cartHeaderP).toBeDefined();
  expect(cartItemList).toBeDefined();
  expect(cartBtn).toBeDefined();
  expect(cartSubTotal).toBeDefined();
  expect(cartDelivery).toBeDefined();
  expect(cartTax).toBeDefined();
  expect(cartTotal).toBeDefined();
});
