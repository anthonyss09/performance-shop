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

  const homePageMain = screen.getByRole("home-page-main");
  const homePageLinkBuy = screen.getByRole("home-page-link-buy");
  const homePageLinkAbout = screen.getByRole("home-page-link-about");

  const homePageImageSneaker = screen.getByRole("home-page-image-sneaker");
  const homePageAboutP = screen.getByRole("home-page-about-p");

  expect(homePageMain).toBeDefined();
  expect(homePageLinkBuy).toBeDefined();
  expect(homePageLinkAbout).toBeDefined();
  expect(homePageImageSneaker).toBeDefined();
  expect(homePageAboutP).toBeDefined();
});
