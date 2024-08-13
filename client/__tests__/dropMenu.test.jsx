import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import DropMenu from "../src/app/components/dropMenu/DropMenu";
test("DropMenu", () => {
  render(<DropMenu />);

  const dropMenuMain = screen.getByRole("drop-menu-main");
  const dropMenuHeader = screen.getByRole("drop-menu-header");
  const dropMenuChevron = screen.getByRole("drop-menu-chevron");
  const dropMenuLinkHome = screen.getByRole("drop-menu-link-home");

  expect(dropMenuMain).toBeDefined();
  expect(dropMenuHeader).toBeDefined();
  expect(dropMenuChevron).toBeDefined();
  expect(dropMenuLinkHome).toBeDefined();
});
