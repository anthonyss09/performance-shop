import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Alert from "../src/app/components/Alert";

test("Alert", () => {
  render(<Alert />);
});
