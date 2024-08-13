import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import LightNavWrapper from "../src/app/components/navbar/LightNavWraper";

test("LightNavWrapper", () => {
  render(
    <StoreProvider>
      <LightNavWrapper />
    </StoreProvider>
  );

  const navbarLightLinkHome = screen.getByRole("navbar-light-link-home");
  const navbarLightLinkAbout = screen.getByRole("navbar-light-link-about");
  const navbarLightLinkShop = screen.getByRole("navbar-light-link-shop");
  const navbarLightCartCount = screen.getByRole("navbar-light-cart-count");
  const navbarLightUserIcon = screen.getByRole("navbar-light-user-icon");
  const navbarLightBars = screen.getByRole("navbar-light-bars");
  const navbarLightCartIcon = screen.getByRole("navbar-light-cart-icon");

  expect(navbarLightLinkHome).toBeDefined();
  expect(navbarLightLinkAbout).toBeDefined();
  expect(navbarLightLinkShop).toBeDefined();
  expect(navbarLightCartCount).toBeDefined();
  expect(navbarLightUserIcon).toBeDefined();
  expect(navbarLightBars).toBeDefined();
  expect(navbarLightCartIcon).toBeDefined();
});
