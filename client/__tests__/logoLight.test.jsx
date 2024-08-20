import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LogoLight from "../src/app/components/logo/LogoLight";

test("LogoLight", () => {
  render(<LogoLight />);
});
