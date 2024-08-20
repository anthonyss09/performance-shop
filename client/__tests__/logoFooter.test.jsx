import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LogoFooter from "../src/app/components/logo/LogoFooter";

test("LogoFooter", () => {
  render(<LogoFooter />);
});
