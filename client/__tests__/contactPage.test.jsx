import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ContactPage from "../src/app/contact/page";

test("ContactPage", () => {
  render(<ContactPage />);
});
