import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import DarkNavWrapper from "../src/app/components/navbar/DarkNavWrapper";

test("DarkNavWrapper", () => {
  render(
    <StoreProvider>
      <DarkNavWrapper />
    </StoreProvider>
  );

  const navbarDarkLinkHome = screen.getByRole("navbar-dark-link-home");
  const navbarDarkLinkAbout = screen.getByRole("navbar-dark-link-about");
  const navbarDarkLinkShop = screen.getByRole("navbar-dark-link-shop");
  const navbarDarkCartCount = screen.getByRole("navbar-dark-cart-count");
  const navbarDarkUserIcon = screen.getByRole("navbar-dark-user-icon");
  const navbarDarkBars = screen.getByRole("navbar-dark-bars");
  const navbarDarkCartIcon = screen.getByRole("navbar-dark-cart-icon");

  expect(navbarDarkLinkHome).toBeDefined();
  expect(navbarDarkLinkAbout).toBeDefined();
  expect(navbarDarkLinkShop).toBeDefined();
  expect(navbarDarkCartCount).toBeDefined();
  expect(navbarDarkUserIcon).toBeDefined();
  expect(navbarDarkBars).toBeDefined();
  expect(navbarDarkCartIcon).toBeDefined();
});
