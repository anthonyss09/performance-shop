import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Alert from "../src/app/components/Alert";

test("Alert", () => {
  render(<Alert />);

  const alertMain = screen.getByRole("alert-main");
  const alertP = screen.getByRole("alert-p");

  expect(alertMain).toBeDefined();
  expect(alertP).toBeDefined();
});
