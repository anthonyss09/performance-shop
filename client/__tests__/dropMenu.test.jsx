import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import StoreProvider from "../src/app/StoreProvider";
import DropMenu from "../src/app/components/dropMenu/DropMenu";
test("DropMenu", () => {
  render(<DropMenu />);
});
