import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import LogoDark from "../src/app/components/logo/LogoDark";

test("LogoDark", () => {
  render(<LogoDark />);
});
