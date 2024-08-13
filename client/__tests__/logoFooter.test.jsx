import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LogoFooter from "../src/app/components/logo/LogoFooter";

test("LogoFooter", () => {
  render(<LogoFooter />);

  const logoPerformanceIcon = screen.getByRole("logo-performance-icon");
  const logoText = screen.getByRole("logo-text");

  expect(logoPerformanceIcon).toBeDefined();
  expect(logoText).toBeDefined();
});
