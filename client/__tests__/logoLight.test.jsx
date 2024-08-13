import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LogoLight from "../src/app/components/logo/LogoLight";

test("LogoLight", () => {
  render(<LogoLight />);

  const logoPerformanceIcon = screen.getByRole("logo-performance-icon");
  const logoText = screen.getByRole("logo-text");

  expect(logoPerformanceIcon).toBeDefined();
  expect(logoText).toBeDefined();
});
